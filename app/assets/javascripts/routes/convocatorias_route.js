Bursa.ConvocatoriasIndexRoute = Bursa.AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('convocatoria', {page: 1});
  },
  
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('currentPage', 1);
  }
});

Bursa.ConvocatoriaRoute = Bursa.AuthenticatedRoute.extend({});

Bursa.ConvocatoriasNewRoute = Bursa.AuthenticatedRoute.extend({
  model: function() {
    var record = this.store.createRecord('convocatoria');
    console.log(record);
    return record;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});

Bursa.ConvocatoriaConsultarRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    return this.modelFor('convocatoria');
  },

  renderTemplate: function() {
    this.render('convocatorias.ver', {
      controller: 'convocatoriaConsultar'
    });
  }

});

Bursa.ConvocatoriaVerRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    return this.modelFor('convocatoria');
  },

  renderTemplate: function() {
    this.render('convocatorias.ver', {
      controller: 'convocatoriaVer'
    });
  }
});