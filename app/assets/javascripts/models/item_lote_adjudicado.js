// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.ItemLoteAdjudicado = DS.Model.extend({
  adjudicacionLote: DS.belongsTo('Bursa.AdjudicacionLote'),
  idContrato: DS.attr('string'),
  idLote: DS.attr('string'),
  productoCodigo: DS.attr('string'),
  productoDescripcion: DS.attr('string'),
  descripcion: DS.attr('string'),
  cantidad: DS.attr('number'),
  precioUnitario: DS.attr('number'),
  item: DS.belongsTo('Bursa.Item')
});
