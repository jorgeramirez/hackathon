Bursa.ClientesIndexRoute = Bursa.AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('cliente', {page: 1, ignorar_cliente_default: true});
  },
  
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('currentPage', 1);
  }
});

Bursa.ClienteRoute = Bursa.AuthenticatedRoute.extend({});

Bursa.ClienteEditRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    console.log('edit cliente');
    return this.modelFor('cliente');
  },

  renderTemplate: function() {
    this.render('clientes.new', {
      controller: 'clienteEdit'
    });
  }
});

Bursa.ClienteDeleteRoute = Bursa.AuthenticatedRoute.extend({
  model: function(params) {
    return this.modelFor('cliente');
  },

  renderTemplate: function() {
    this.render('clientes.delete', {
      controller: 'clienteDelete'
    });
  }
});

Bursa.ClientesNewRoute = Bursa.AuthenticatedRoute.extend({

  model: function() {
    return this.store.createRecord('cliente');
  }
});