Bursa.AuthenticatedRouteMixin = Ember.Mixin.create({
  hasPermission: function(recursoSolicitado){
    var permisos = this.session.content.permisos;

    //Se vuelve a array los permisos en caso de que se haya vuelto cadena *un error cachiai*
    permisos = typeof permisos === "string" ? permisos.split(",") : permisos;
    permisos = permisos || [];

    //Se busca la coincidencia del recurso/accion.
    var authorized = false;
    permisos.forEach(function(permiso){   
      if(permiso === recursoSolicitado){
        authorized = true;
      }
    });
    return authorized;
  }
});
