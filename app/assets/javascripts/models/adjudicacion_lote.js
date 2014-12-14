// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.AdjudicacionLote = DS.Model.extend({
  adjudicacion: DS.belongsTo('adjudicacion'),
  idContrato: DS.attr('string'),
  idLote: DS.attr('string'),
  numeroLote: DS.attr('string'),
  nombreLote: DS.attr('string')
});
