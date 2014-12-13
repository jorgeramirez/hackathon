//Misma historia, como hacemos i18n???
Ember.Handlebars.helper('yesno', function(value, options) {
  if (value){
      return 'Sí';
    }else{
      return 'No';
    }  
});