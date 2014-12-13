// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.RecursosRol = DS.Model.extend({
  rol: DS.belongsTo('Bursa.Rol'),
  recurso: DS.belongsTo('Bursa.Recurso')
});
