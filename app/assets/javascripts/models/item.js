// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Item = DS.Model.extend({
  productoCodigo: DS.attr('string'),
  productoDescripcion: DS.attr('string'),
  precioMinimo: DS.attr('string'),
  precioMaximo: DS.attr('string'),
  precioPromedio: DS.attr('string')
});
