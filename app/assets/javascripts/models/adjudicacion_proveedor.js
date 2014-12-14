// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.AdjudicacionProveedor = DS.Model.extend({
  adjudicacion: DS.belongsTo('adjudicacion'),
  montoAdjudicado: DS.attr('number'),
  moneda: DS.attr('string'),
  idContrato: DS.attr('string'),
  codigoContratacion: DS.attr('string'),
  razonSocial: DS.attr('string'),
  ruc: DS.attr('string')
});
