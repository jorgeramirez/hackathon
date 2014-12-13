Bursa.views = Bursa.views || {};

Bursa.views.DatePickerView = Ember.View.extend({
  templateName: 'date_picker',

  placeholder: 'd/m/aaaa',

  autofocus : false,

  didInsertElement: function() {
    if (!Ember.get(this, 'readonly')) {
      $('.input-group.date').datepicker({
        language: "es", autoclose: true, todayHighlight: true, format: "dd/mm/yyyy"
      });
    }
    var date =  Ember.get(this, 'value');
    
    if (date) {
      console.log("render: " + date);
      this.set('fecha', moment(date).format('DD/MM/YYYY'));
    }

    if (Ember.get(this, 'autofocus')) {
      console.log(this.$('input'));
      this.$().focus();
    }
    
  },

  value: null,

  readonly : false,

  lastValid: null,

  nullable: null,

  widgetClass: "filter form-control",

  valueChangeObserver: function() {
  
    var value = this.get('value');
    
    if(!value) {
      this.$('input').val('');
    }
  }.observes('value'),

  change: function() {
    console.log("change");
    var fecha = Ember.get(this, 'fecha');
    console.log("change %o", fecha);

    var date = moment(fecha, 'DD-MM-YYYY');
    
    if (Ember.get(this, 'nullable') && fecha === "") {
      this.set('value', null);
    } else if (!date.isValid()) {
      //console.log("fecha invalida");
      if ( Ember.get(this, 'nullable')) {
        this.set('value', null);
      }
    } else {
      this.set('value', date.toDate());
    }
    
  },

  
  focusIn:function (event) {
    var date = moment(Ember.get(this, 'fecha'), 'DD-MM-YYYY');

    if ( !Ember.get(this, 'nullable')) {
      if (!date.isValid()) {
        //console.log("fecha invalida en focus in");
        this.set('lastValid', null);
      } else {
        //console.log(date.format('DD/MM/YYYY'));
        this.set('lastValid', date);
      }
    }

  },

  focusOut:function (event) {
    if (!Ember.get(this, 'nullable')) {
      var lastValid = Ember.get(this, 'lastValid');

      if (lastValid) {
        this.set('value', lastValid.toDate());
        this.set('fecha', lastValid.format('DD/MM/YYYY'));
      }
    }
    //console.log("focusOut" + moment(Ember.get(this, 'fecha'), 'DD-MM-YYYY'));
  }
});
