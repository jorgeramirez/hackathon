Bursa.NumberField = Em.TextField.extend({
  classNames: ["number-field"],
  currentValue: undefined,
  init: function() {
    this._super();
    this.numberPlaceholder = this.get("number");
    this.updateValue();
  },

  updateNumber: function() {
    if(this.currentValue !== this.get("value")){
      var number = this.unformatNumber(this.get("value"));
      this.set("number", number);
    }
  }.observes("value"),

  updateValue: function(){
    var value = this.formatNumber(this.get("number"));
    if(value !== this.currentValue){
      this.currentValue = value;
      this.set("value", value);
    } 
  }.observes("number"),

  formatNumber: function(number){
    if(number){
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
  },

  unformatNumber: function(value){
    if(value){
      return value.split('.').join('');
    }
  }
});

Ember.Handlebars.helper("number-field", Bursa.NumberField);

$(document).ready(function(){
  $(".number-field").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});