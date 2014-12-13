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
  this.resource("convocatorias", function() {
    this.route('new');
    this.resource("convocatoria", { path: "/:convocatoria_id" }, function() {
        this.route('consultar');
        this.route('ver');
    });
  });

    
  
  this.resource("usuarios", function() {
    this.route('new');
    this.resource("usuario", { path: "/:usuario_id" }, function() {
        this.route('edit');
        this.route('delete');
    });
  });


  this.resource('sessions', function() {
    this.route('new');
  });

  this.route("noEncontrado", { path: "*path"});
});
