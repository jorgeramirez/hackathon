// For more information see: http://emberjs.com/guides/routing/

// Reopen the route class to provide an implementation for file support declaration.
Ember.Route.reopen({
    allowFileDrop: false,
    
    activate: function() {
        this._super();
        if(this.get('allowFileDrop')) {
            this.controllerFor('application').incrementProperty('allowFileDrop');
        }
    },
    
    deactivate: function() {
        this._super();
        if(this.get('allowFileDrop')) {
            this.controllerFor('application').decrementProperty('allowFileDrop');
        }
    }
});

Bursa.Router.reopen({
  location: 'history'
});

Bursa.Router.map(function() {
  this.resource("clientes", function() {
    this.route('new');
    this.resource("cliente", { path: "/:cliente_id" }, function() {
        this.route('edit');
        this.route('delete');
    });
  });

    
  
  this.resource("usuarios", function() {
    this.route('new');
    this.route('dato');
    this.resource("usuario", { path: "/:usuario_id" }, function() {
        this.route('edit');
        this.route('delete');
    });
  });

  this.resource("sucursales", function() {
    this.route('new');
    this.resource("sucursal", { path: "/:sucursal_id" }, function() {
        this.route('edit');
        this.route('delete');
    });
  });

  this.resource('sessions', function() {
    this.route('new');
    this.route('newuser');
  });

  this.route("noEncontrado", { path: "*path"});
  
  this.resource("categoriaClientes", function() {
    this.route('new');
    this.resource("categoriaCliente", { path: "/:categoria_cliente_id" }, function() {
        this.route('edit');
        this.route('delete');
    });
  });

});
