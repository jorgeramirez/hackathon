/*global Bursa, Ember, $, console */
/**
 * Agrega soporte para filtrado a un controlador
 *
 * @author: Jorge Ramírez <jorge@codium.com.py>
 **/
(function() {
  'use strict';
  Bursa.mixins = Bursa.mixins || {};

  Bursa.mixins.Filterable = Ember.Mixin.create({
    hasFiltering: true,
    searchValue: '',
    staticFilters: {},
    hasSearchForm: false,
    searchFormTpl: '',
    searchFormModal: '',
    filters: {},

    // private
    _staticFiltersCopy: {},
    _staticFiltersCopied: false,

    buildFilteringParams: function() {
      
      var params = {};
      params.page = 1;
      params.by_all_attributes = this.get('searchValue');

      var staticFilters = this.get('staticFilters');
      var filters = this.get('filters');
      
      if(!this.get('_staticFiltersCopied')) {
        this._copyStaticFilters();
      }
      
      for (var filter in staticFilters) {
        params[filter] = staticFilters[filter];
      }
      
      for (filter in filters) {
        params[filter] = filters[filter];
      }
      return params;
    },
    
    actions: {
      doSearch: function(searchValue) {
        
        var self = this;
        this.set('searchValue', searchValue);

        this.store.find(this.resource, this.buildFilteringParams()).then(function(model) {
          self.set('model', model);
        });
      },
    
      clearFilters: function() {
       
        // restauramos los filtros estáticos que fueron definidos a nivel de clase en el controlador
        if(!this.get('_staticFiltersCopied')) {
          this._copyStaticFilters();
        }
        var staticFiltersCopy = $.extend(true, {}, this.get('_staticFiltersCopy'));
        
        this.set('searchValue', '');
        this.set('staticFilters', staticFiltersCopy);
        this.set('filters', {});
        
        if(this.get('hasSearchForm') && 
           typeof this.clearSearchForm === "function") {
          this.clearSearchForm();
        }
        this.send('doSearch', '');
      },

      noop: function() {}
    },

    _copyStaticFilters: function() {
      this.set('_staticFiltersCopy', $.extend(true, {}, this.get('staticFilters')));
      this.set('_staticFiltersCopied', true);
    }
  });
})();
