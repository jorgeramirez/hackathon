// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Pac = DS.Model.extend({
  categoria: DS.belongsTo('categoria'),
  idLlamado: DS.attr('string'),
  anio: DS.attr('string'),
  tipoOperacion: DS.belongsTo('tipoOperacion'),
  moneda: DS.attr('string'),
  nombreLicitacion: DS.attr('string'),
  convicante: DS.attr('string'),
  fechaEstimada: DS.attr('string'),
  fechaPublicacion: DS.attr('string'),
  estadoActual: DS.attr('string')
});
