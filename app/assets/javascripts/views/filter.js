Bursa.views = Bursa.views || {};

Bursa.views.FilterView = Ember.View.extend({
  templateName: 'filter',
  searchValue: '',
  
  didInsertElement: function() {

    // handlers para atajos de teclado
    var self = this;
    
    $(document).bind('keydown', 'f2', function(){
      $(self.get('controller.searchFormModal')).modal('show');
    });
    
    $(document).bind('keydown', 'esc', function(){
      $(self.get('controller.searchFormModal')).modal('hide');
    }); 
  }
});
