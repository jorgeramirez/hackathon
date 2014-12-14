Bursa.SessionsNewRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },

  actions: {
    sessionAuthenticationFailed: function (error) {
      console.log('error ' + error);
      this.controller.set('errorMessage', error.errors);
    }
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  }
});

Bursa.SessionsNewuserRoute = Ember.Route.extend({
  model: function() {
    var record = this.store.createRecord('usuario');
    console.log(record);
    return record;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('nuevoUsuario', true);
    controller.set('changePass', true)
  }
});
