// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Adjudicacion = DS.Model.extend({
  pac: DS.belongsTo('pac'),
  convocatoria: DS.belongsTo('convocatoria'),
  categoria: DS.belongsTo('categoria'),
  tipoOperacion: DS.belongsTo('tipoOperacion')
});
