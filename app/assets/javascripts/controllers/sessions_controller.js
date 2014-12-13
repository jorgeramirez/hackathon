Ember.SimpleAuth.Authenticators.OAuth2.reopen({
  authenticate: function(credentials) {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var data = { grant_type: 'password', username: credentials.identification, password: credentials.password, sucursal: credentials.sucursal};
          _this.makeRequest(data).then(function(response) {
            Ember.run(function() {
              var expiresAt = _this.absolutizeExpirationTime(response.expires_in);
              _this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
              resolve(Ember.$.extend(response, { expires_at: expiresAt }));
            });
            Script();
          }, function(xhr, status, error) {
            Ember.run(function() {
              reject(xhr.responseJSON || xhr.responseText);
            });
          });
        });
      }

 });


Bursa.SessionsNewController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  formTitle: 'Iniciar Sesión',
  authenticatorFactory: 'authenticator:oauth2-password-grant',

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      this.set('password', null);
      this.get('session').authenticate(this.get('authenticatorFactory'), credentials);
    }
  }

});