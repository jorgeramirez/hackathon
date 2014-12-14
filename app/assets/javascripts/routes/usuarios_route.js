Bursa.UsuariosIndexRoute = Bursa.AuthenticatedRoute.extend({
  model: function() {
    var session = this.get('session');
    console.log(session);
    return this.store.find('usuario', {page: 1});
  },
  
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('currentPage', 1);
  }
});

Bursa.UsuarioRoute = Bursa.AuthenticatedRoute.extend({});

Bursa.UsuariosNewRoute = Bursa.AuthenticatedRoute.extend({
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

Bursa.UsuarioEditRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    console.log(params);
    return this.modelFor('usuario');
  },

  renderTemplate: function() {
    this.render('usuarios.new', {
      controller: 'usuarioEdit'
    });
  }

});

Bursa.UsuarioDatoRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    var sessions = this.get('sessions');
    console.log("----------llamada a usuarios datos");
    return this.store.find('usuario', {page: 1});
  },

  renderTemplate: function() {
    this.render('usuarios.new', {
      controller: 'usuarioEdit'
    });
  }

});

Bursa.UsuarioDeleteRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    return this.modelFor('usuario');
  },

  renderTemplate: function() {
    this.render('usuarios.delete', {
      controller: 'usuarioDelete'
    });
  }
});