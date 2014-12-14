// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.Usuario = DS.Model.extend({
  nombre: DS.attr('string'),
  apellido: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  direccion: DS.attr('string'),
  telefono: DS.attr('string'),
  roles: DS.hasMany('rol', {async: true})
});
