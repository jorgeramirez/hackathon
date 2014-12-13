Handlebars.registerHelper('isLessThan', function(v1, v2, options) {
  var p1 = options.contexts[0].get(v1);
  var p2 = options.contexts[0].get(v2);
  
  if(p1 < p2) {
    return options.fn(this);
  }
  return options.inverse(this);
});