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
