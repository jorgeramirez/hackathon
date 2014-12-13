// http://emberjs.com/guides/models/using-the-store/
// DS.ActiveModelAdapter.reopen({
//   namespace: "api/v1"
// });

Bursa.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1'
});

//Bursa.ApplicationAdapter.configure('Bursa.CategoriaProducto', { primaryKey: 'categoria' });

Bursa.ApplicationSerializer = DS.ActiveModelSerializer.extend({
  
  extractMeta: function(store, type, payload) {
    if (payload && payload.meta) {
      store.metaForType(type, { 
        totalPages: payload.meta.total_pages,
        total: payload.meta.total
      });
      delete payload.meta;
    } else {
      store.metaForType(type, { 
        totalPages: 0,
        total: 0
      });
    }
  },

  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    //console.log("typeRoot: " + inflector.singularize(camelized));
    if (camelized === 'meta') {
      return camelized;
    } else {
      return inflector.singularize(camelized);
    }
    
  }
});


Bursa.UsuarioSerializer = Bursa.ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, 
  { attrs: 
      { roles: {embedded: 'always'},
        sucursales: {embedded: 'always'}
      }, 
  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    if (camelized === 'usuario') {
      return camelized;
    } else {
      return inflector.singularize(camelized);
    }
  }
});


Bursa.CategoriaClienteSerializer = Bursa.ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, 
  { attrs: 
      { promociones: {embedded: 'always'}
        
      }
});


DS.Store.reopen({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  // adapter: '-active-model'
  adapter: Bursa.ApplicationAdapter
  //adapter: DS.FixtureAdapter
});
