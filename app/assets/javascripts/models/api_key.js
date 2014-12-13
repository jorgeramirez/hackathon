// for more details see: http://emberjs.com/guides/models/defining-models/

Bursa.APIKey = Ember.Object.extend({
  usuario: DS.belongsTo('usuario'),
  accessToken: DS.attr('string'),
  scope: DS.attr('string')
});
