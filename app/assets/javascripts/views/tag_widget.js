Bursa.views = Bursa.views || {};

/**
 * Widget para creación de tags
 *
 * @author: Jorge Ramírez <jorge@codium.com.py>
 **/
Bursa.views.TagWidgetView = Ember.View.extend({
  templateName: 'tag_widget',
 
  // atributo utilizado para mandar al servidor
  itemValue: '',
  
  // atributo que identifica la propiedad a mostrar al usuario
  itemText: '',

  // root de la respuesta del servidor
  jsonRoot: '',

  // nombre del servicio a utilizar para recuperar las opciones
  service: '',

  apiNamespace: '/api/v1/',

  queryScope: 'by_all_attributes',

  datasource: [],

  single: false,

  singleKey: '',
  
  didInsertElement: function() {
    
    var self = this;
    var itemValue = this.get('itemValue');
    var itemText = this.get('itemText');
    var options = this.get('options');
    var datasource = this.get('datasource');
    var loading = false;
    var single = this.get('single');
    var singleKey = this.get('singleKey');
    var singleLoaded = false;
    var store = self.get('controller.store');
    var type = self.get('modelType');
    var id = self.get('modelID');

    /**
     * Obtiene el valor para un atributo del objeto 
     * dado como parámetro.
     **/
    function getValue(model, attr) {
      return typeof model.get === "function" ? model.get(attr) : model[attr]; 
    }

    function comparator(model, other, attr) {
      return getValue(model, attr) == getValue(other, attr);
    }

    this.$('select').tagsinput({
      itemValue: itemValue,
      itemText: itemText,
      itemComparator: comparator,
      getValue: getValue,
      modelStore: store,
      modelType: type,
      modelID: id
    });

    // verificamos si el datasource definido es un promise
    if (datasource) { 
      if (typeof datasource.then === 'function') {
        // loading a true para que no agreguen dos veces los 
        // elementos que se recuperan del datasource
        loading = true;
        datasource.then(function(response) {
          
          // cargamos los tags en base a la lista de elementos (DS.Model) retornada
          response.get('content').forEach(function(item) {
            self.$('select').tagsinput('add', item);
          });
          loading = false;
        });
      } else if(typeof datasource.forEach === 'function') {
        // el datasource es un array de objetos
        datasource.forEach(function(item) {
          self.$('select').tagsinput('add', item);
        });
      } else if (single) {
        
        var singleObject = datasource.get(singleKey);

        if (singleObject) {
          loading = true;
          singleLoaded = true;
          singleObject.then(function(response) {
            // cargamos los tags en base a la lista de elementos (DS.Model) retornada
            self.$('select').tagsinput('add', response);
            loading = false;
          });
        }
      }
    }

    this.configureTypeahead(datasource, itemValue, itemText);

    if (singleLoaded) {
      self.$().find('input').attr('disabled', 'disabled');
      self.$().find('.tt-input').hide();
    }
    
    // listener que atiende cuando un tag se elimina
    this.$('select').bind('itemRemoved', function(event) {
       
      if (single) {
        var singleObject = datasource.get(singleKey);
        datasource.set(singleKey, undefined);
        self.$().find('input').removeAttr('disabled');
        self.$().find('.tt-input').show();
      } else if(datasource) {
        var models = datasource.get('content');
        models.every(function(item) {
          if((comparator(item, event.item, itemValue)) || comparator(item, event.item, itemText)) {
            datasource.removeObject(item);
            return false;
          }
          return true;
        });
      }
    });
    
    // listener que atiende cuando un tag se agrega
    this.$('select').bind('itemAdded', function(event) {

      if(!loading) {
        var factory, record;
        if (single) {
          record = event.item;
          var singleObject = datasource.get(singleKey);
          var itemValue = record.get(self.get('itemValue'));
          datasource.set(singleKey, record);
          self.$().find('input').attr('disabled', 'disabled');
          self.$().find('.tt-input').hide();
        } else if (datasource) {
          // agregamos el elemento al datasource
          record = event.item;
          datasource.pushObject(record);
        }
      }
    });
  },

  /**
   * Configura el plugin typeahead utilizado para recuperar
   * la lista de opciones desde el servidor.
   *
   * @private
   **/
  configureTypeahead: function(datasource, itemValue, itemText) {

    var session = this.get('session');
    var self = this;
    var store = self.get('controller.store');
    var type = self.get('modelType');
    var id = self.get('modelID');
    var single = self.get('single');

    if(type === undefined || (id === undefined && !single)) {
      throw "modelType y modelID deben definirse para el tagwidget";
    }

    var engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace(itemText),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: this.get('apiNamespace') + this.get('service') + '?' + this.get('queryScope') + '=%QUERY',
        headers: {
          Authorization: 'Bearer ' + session.access_token
        },
        filter: function(response) {
          
          var models = [];
          response[self.get('jsonRoot')].forEach(function(el) {
            var record = store.getById(type, el[id]);
            
            if(record && record.get(itemText) === undefined) {
              store.unloadRecord(record);
              record = null;
            }
            
            if(!record){
              record = store.createRecord(type, el);
            }
            models.push(record);
          });
          return models;
        }
      }
    });

    engine.initialize();
    
    this.$('select').tagsinput('input').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },{
      name: 'options',
      displayKey: function(model) {
        return model.get(itemText); 
      },
      source: engine.ttAdapter()
    }).bind('typeahead:selected', $.proxy(function (obj, data) {
      var added = this.tagsinput('add', data);
      this.tagsinput('input').typeahead('val', '');
    }, this.$('select')));
  }
});
