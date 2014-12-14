Bursa.LlamadosIndexController = Ember.ArrayController.extend(Bursa.mixins.Pageable, Bursa.mixins.Filterable, {
  resource: 'llamado',
  perPage:  10,
  hasSearchForm: true,
  searchFormTpl: 'llamados/searchform',
  searchFormModal: '#llamadoSearchForm',

  clearSearchForm: function() {

  }
});
