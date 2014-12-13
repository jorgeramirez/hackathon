Ember.Handlebars.registerBoundHelper('dateformat', function(value, options) {
  var date = moment(value);
  if (date.isValid()) {
    return date.format('DD/MM/YYYY');
  } else {
    return "";
  }
});