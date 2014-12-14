// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.ConvocatoriaLoteItem = DS.Model.extend({
  convocatoriaLote: DS.belongsTo('convocatoriaLote'),
  unidadMedida: DS.attr('string'),
  numero: DS.attr('string'),
  productoCodigo: DS.attr('string'),
  productoDescripcion: DS.attr('string'),
  item: DS.belongsTo('item'),
  descripcion: DS.attr('string'),
  cantidad: DS.attr('number')
});
