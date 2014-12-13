// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Convocatoria = DS.Model.extend({
  codigo: DS.attr('string'),
  nombreLicitacion: DS.attr('string'),
  convocante: DS.attr('string'),
  tipoContratacion: DS.attr('string'),
  sistemaAdjudicacion: DS.attr('string'),
  formaPago: DS.attr('string'),
  aperturaCompetencia: DS.attr('string'),
  estado: DS.attr('string')
});
