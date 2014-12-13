Bursa.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {

	actions: {
	    showModal: function(name, content) {
	      this.controllerFor(name).send('clear');
	      this.controllerFor(name).set('content', content);
	      this.render(name, {
	        into: 'application',
	        outlet: 'modal'
	      });
	    },
	    removeModal: function() {
	      this.disconnectOutlet({
	        outlet: 'modal',
	        parentView: 'application'
	      });
	    },

	    didTransition: function() {
	      Ember.run.schedule('afterRender', this, function () {
	      	var appController = this.controllerFor('application');
					appController.set('containerHeight', Bursa.newHeightWrapper());
        });
				return true;
	    }
  	}
});