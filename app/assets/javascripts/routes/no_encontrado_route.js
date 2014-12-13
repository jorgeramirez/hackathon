Bursa.NoEncontradoRoute = Bursa.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render('404', {});
  }
});
