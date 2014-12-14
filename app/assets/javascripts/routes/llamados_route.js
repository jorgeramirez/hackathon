Bursa.LlamadosIndexRoute = Bursa.AuthenticatedRoute.extend({
  
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('currentPage', 1);
    controller.set('modalidad', {});
    controller.set('fechaDesde', '');
    controller.set('fechaHasta', '');
    controller.set('modalidades', ["Convenio Marco", "Acuerdo Institucional", "Acuerdo Nacional",
                                   "Concurso de Ofertas", "Contratación Directa", "Contratación por Excepción",
                                   "Licitación Pública Internacional", "Licitación Pública Nacional", "Locación de Inmuebles"]);
  }
});
