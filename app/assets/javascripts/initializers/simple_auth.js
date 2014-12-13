Ember.SimpleAuth.Authenticators.OAuth2.reopen({
  serverTokenEndpoint: '/api/v1/session'
});

Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    
    Ember.SimpleAuth.setup(container, application, {
      authorizerFactory: 'authorizer:oauth2-bearer'
    });
  }
});
