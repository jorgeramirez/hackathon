Bursa.FocusSelect= Ember.Select.extend({
  becomeFocused: function() {
    this.$().focus();
  }.on('didInsertElement')
});