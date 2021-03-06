Bursa.UsuariosIndexController = Ember.ArrayController.extend(
  Bursa.mixins.Pageable, 
  Bursa.mixins.Filterable,{
  resource:  'usuario',
  perPage:  15
});

//*****************************BASE Controller******************************************
Bursa.UsuariosBaseController = Ember.ObjectController.extend({

});



Bursa.UsuariosNewController = Bursa.UsuariosBaseController.extend({

  formTitle: 'Nuevo Usuario',

  actions: {
    save: function() {
      var model = this.get('model');
      var self = this;
			Bursa.Utils.disableElement('button[type=submit]');
        
			if (model.get('isValid')) {
				model.save().then(function(response) {
					// success
					self.set('model', response);
					self.transitionToRoute('usuarios').then(function () {
						Bursa.Notification.show('Exito', 'El usuario se ha guardado.');
						Bursa.Utils.enableElement('button[type=submit]');
					});
				}, function(response){
					Bursa.Notification.show('Error', 'No se pudo crear el usuario.', Bursa.Notification.ERROR_MSG);
					Bursa.Utils.enableElement('button[type=submit]');
				});
			}else{
				Bursa.Utils.enableElement('button[type=submit]');
			}
        
      
      
    },

    cancel: function() {
      var model = this.get('model');
      model.deleteRecord();
      this.transitionToRoute('usuarios');
    }
  }
});

Bursa.UsuarioEditController = Bursa.UsuariosBaseController.extend({

  formTitle: 'Editar Usuario',
  
  actions: {
    save: function() {
      var model = this.get('model');
      var self = this;
			Bursa.Utils.disableElement('button[type=submit]');
      
			if (model.get('isValid')) {
				model.save().then(function(response) {
					self.set('model', response);
					self.transitionToRoute('usuarios').then(function () {
						Bursa.Notification.show('Exito', 'El usuario se ha actualizado.');
						Bursa.Utils.enableElement('button[type=submit]');
					});
				}, function(response) {

					Bursa.Notification.show('Error', 'No se pudo actualizar el usuario.', Bursa.Notification.ERROR_MSG);
					Bursa.Utils.enableElement('button[type=submit]');
				});
			}else{
				Bursa.Utils.enableElement('button[type=submit]');
			}
    },

    cancel: function() {
      this.transitionToRoute('usuarios');
    }
  }
});

Bursa.UsuarioDeleteController = Ember.ObjectController.extend({

  actions: {
    deleteRecord: function() {
      var model = this.get('model');
      var self = this;
			Bursa.Utils.disableElement('button[type=submit]');
      model.deleteRecord();
      model.save().then(function() {
        self.transitionToRoute('usuarios').then(function () {
          Bursa.Notification.show('Exito', 'El usuario se ha eliminado.');
          Bursa.Utils.enableElement('button[type=submit]');
        });
      }, function(response) {

				Bursa.Notification.show('Error', 'No se pudo borrar el usuario.', Bursa.Notification.ERROR_MSG);
        Bursa.Utils.enableElement('button[type=submit]');
      });
    },

    cancel: function() {
			$('body').removeClass('modal-open');
      this.transitionToRoute('usuarios');
    }
  }
});