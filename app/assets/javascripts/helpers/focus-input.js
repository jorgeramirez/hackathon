Ember.TextField.reopen({
  attributeBindings: ['autofocus'],
/*
  didInsertElement: function() {
    if (Ember.get(this, 'noEnter')) {
      this.$().keydown(function(event){
        if(event.keyCode == 13 ) {
          var count = Ember.get(this, 'count');

          if (count === undefined) {
            var count = 0;
            Ember.set(this, 'count', 0);
          }

          console.log(count);
          console.log(Ember.get(this, 'enter'));
          if (count < Ember.get(this, 'enter')) {
            event.preventDefault();
            Ember.set(this, 'count', count + 1);
            return false;
          } else {
            Ember.set(this, 'count', 0);
            return true;
          }  
        }
      });
    }
  }
  */
});

Bursa.FocusInputComponent = Ember.TextField.extend({
  becomeFocused: function() {
    this.$().focus();
  }.on('didInsertElement')
});