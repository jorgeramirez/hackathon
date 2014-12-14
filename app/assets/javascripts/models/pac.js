// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Pac = DS.Model.extend({
  idPac: DS.attr('string'),
  categoria: DS.belongsTo('Bursa.Categoria'),
  idLlamado: DS.attr('string'),
  anio: DS.attr('string'),
  tipoOperacion: DS.belongsTo('Bursa.TipoOperacion'),
  moneda: DS.attr('string'),
  nombreLicitacion: DS.attr('string'),
  convicante: DS.attr('string'),
  fechaEstimada: DS.attr('string'),
  fechaPublicacion: DS.attr('string'),
  estadoActual: DS.attr('string')
});
