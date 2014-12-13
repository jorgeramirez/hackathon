Ember.Handlebars.helper('error', function(context, options) {
	//console.log(context);
  //console.log(options);
    if(context && context.length){
        return context[0].message;
    }
});
