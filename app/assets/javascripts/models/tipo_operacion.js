// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.TipoOperacion = DS.Model.extend({
  codigo: DS.attr('string'),
  descripcion: DS.attr('string')
});
