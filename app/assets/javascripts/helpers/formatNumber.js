Ember.Handlebars.helper('formatNumber', function(value, options) {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
});