Bursa.AuthenticatedRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, Bursa.AuthenticatedRouteMixin,
{
  beforeModel: function(transition) {
    var appController = this.controllerFor('application');
    //console.log(appController);
    if(!this.session.isAuthenticated) {
      appController.set('previousTransition', transition);
      this.transitionTo('sessions.new');
    }
  },
  
  actions: {
      willTransition: function(transition) {
        var appController = this.controllerFor('application');
        appController.set('containerHeight', Bursa.newHeightWrapper());
        var model = this.get('currentModel');
        if (model && model.get('isDirty')) {
          if (true) {
            //Stay on same page and continue editing
            //transition.abort();
         // } else {
            //Delete created record
            var model = this.get('currentModel');
            if (!model.get('id')) {
              model.deleteRecord();
            } else {
              model.rollback();
            }
          }
        } 
      }
    }
  
});