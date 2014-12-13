Bursa.NumberInputComponent = Ember.TextField.extend({
    type: 'number',
    attributeBindings: ['min', 'max', 'step', 'disabled'],
    integer: false,

    didInsertElement: function() {
        var self = this;
        this.$().keypress(function(key) {
            //console.log(key.charCode);
            //console.log(self.get('integer'));
            if (self.get('integer') && (key.charCode == 46)) {
                return false;
            }

            if ((key.charCode != 0) && (key.charCode != 8) && (key.charCode != 46) && (key.charCode != 45) && (key.charCode < 48 || key.charCode > 57)) {
                return false;
            }
        });
    }
});