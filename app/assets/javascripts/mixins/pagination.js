/**
 * Agrega soporte para paginación a un controlador
 *
 * @author: Jorge Ramírez <jorge@codium.com.py>
 **/
Bursa.mixins = Bursa.mixins || {};

Bursa.mixins.Pageable = Ember.Mixin.create({
  
  perPage: Bursa.Config.perPage,
  currentPage: 1,
  hasPagination: true,

  start: function() {
    return (this.get('currentPage') - 1) * this.get('perPage') + 1;
  }.property('currentPage'),

  end: function() {
    return this.get('start') + this.get('model').content.length - 1;
  }.property('start', 'model'),

  totalPages: function() {
    return this.store.metadataFor(this.resource).totalPages;  
  }.property('model'),

  total: function() { 
    return this.store.metadataFor(this.resource).total;
  }.property('model'),

  hasNext: function() {
    return this.get('currentPage') < this.get('totalPages');
  }.property('totalPages'),

  hasPrev: function() {
    return this.get('currentPage') > 1;
  }.property('model'),

  buildPaginationParams: function(currentPage) {
    
    var params = {};
    
    if(this.get('hasFiltering')) {
        params = this.buildFilteringParams();
    }
    params.page = currentPage;
    return params;
  },
  
  actions: {
    nextPage: function() { 
      if(!this.get('hasNext')){
        return;
      }

      var currentPage = this.get('currentPage') + 1;
      var self = this;
      var params = this.buildPaginationParams(currentPage);
      this.store.find(this.resource, params).then(function(model) {
        self.set('model', model);
        self.set('currentPage', currentPage);
      });
    },

    previousPage: function() {
      if(!this.get('hasPrev')){
        return;
      }

      var currentPage = this.get('currentPage') - 1;
      var self = this;
      var params = this.buildPaginationParams(currentPage);
      this.store.find(this.resource, params).then(function(model) {
        self.set('model', model);
        self.set('currentPage', currentPage);
      });
    }
  }
});
