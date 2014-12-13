Bursa.FocusCheckboxComponent = Ember.Checkbox.extend({
  becomeFocused: function() {
    this.$().focus();
  }.on('didInsertElement')
});