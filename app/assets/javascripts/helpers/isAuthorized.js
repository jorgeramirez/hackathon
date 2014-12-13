Handlebars.registerHelper('isAuthorized', function(recursoSolicitado, options) {
  var permisos = Ember.get(options.data.keywords.controller,'session.permisos');

  //Se vuelve a array los permisos en caso de que se haya vuelto cadena *un error cachiai*
  permisos = typeof permisos === "string" ? permisos.split(",") : permisos;
  permisos = permisos || [];

  //Se busca la coincidencia del recurso/accion.
  permisos.forEach(function(permiso){		
		if(permiso === recursoSolicitado){
			//console.log('Está autorizado al recurso ' + recursoSolicitado);//eliminar
			return options.fn(this);
		}
  });
  return options.inverse(this);
});