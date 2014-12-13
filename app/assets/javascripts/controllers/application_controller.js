Bursa.ApplicationController = Ember.Controller.extend({
  //currentUser: function() {
    //return Bursa.AuthManager.get('apiKey.usuario')
  //}.property('Bursa.AuthManager.apiKey'),

  isNotAuthenticated: Ember.computed.not('session.isAuthenticated'),

  containerHeight: 600,

  containerHeightStyle: function() {
    return "height: " + this.get('containerHeight') + "px";
  }.property('containerHeight'),
});
