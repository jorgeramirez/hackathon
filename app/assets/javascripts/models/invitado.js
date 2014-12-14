// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Invitado = DS.Model.extend({
  convocatoria: DS.belongsTo('Bursa.Convocatoria'),
  razonSocial: DS.attr('string'),
  ruc: DS.attr('string'),
  telefono: DS.attr('string'),
  email: DS.attr('string')
});
