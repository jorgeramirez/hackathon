// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.ConvocatoriaLote = DS.Model.extend({
  convocatoria: DS.belongsTo('convocatoria'),
  nro: DS.attr('string'),
  nombreLote: DS.attr('string')
});
