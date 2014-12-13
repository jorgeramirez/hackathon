Bursa.IndexRoute = Ember.Route.extend(Bursa.AuthenticatedRouteMixin, {

  redirect: function() {
    if(this.session.isAuthenticated) {
      
      $('#main-content').backstretch("destroy", false);
    

      var appController = this.controllerFor('application');
      var previousTransition = appController.get('previousTransition');

      //this.render("application");

      if (previousTransition) {
        appController.get('previousTransition', null);
        previousTransition.retry();
        console.log(previousTransition);
      } else {
        var nextPage = 'usuarios';
        return this.transitionTo(nextPage).then(function() {
            location.reload();
        });
      }

    } else {
      return this.transitionTo('sessions.new');
    }
  }
});
