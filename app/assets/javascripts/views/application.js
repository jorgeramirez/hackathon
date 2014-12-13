Bursa.ApplicationView = Ember.View.extend({
    templateName: 'application',

    didInsertElement: function() {
        var appController = this.get('controller');
        
        // $(window).keydown(function(event) {
        //     //if (event.keyCode == 13 && $('#noEnter').length) {
        //     if (event.keyCode == 13) {
        //         event.preventDefault();
        //         return false;
        //     }
        // });

        Script();

        $(window).resize(function() {
            appController.set('containerHeight', Bursa.newHeightWrapper());
        });
             
    },

});

Bursa.newHeightWrapper = function(detalle) {
    var containerHeight = $('#container').height();
    var footerHeight = $('#footer-container').height();
    var wrapperHeight = $('section.wrapper').height();
    var headerHeight = $('#header-container').height();

    // console.log('wrapper %s', wrapperHeight);
    // console.log('container %s', containerHeight);
    var fromContainer = containerHeight - footerHeight;
    var fromWrapper = wrapperHeight + headerHeight + 25;


    if (fromContainer > fromWrapper) {
        newHeight = fromContainer;
        //console.log('del container %s', newHeight);
    } else {
        newHeight = fromWrapper;
        // console.log('del wrapper %s', newHeight);
    }

    if (detalle) {
        var detalleHeight = $('.form-detalles > .form-group').last().height();
        // console.log('detalleHeight %s', detalleHeight);
        newHeight = newHeight + detalleHeight;
    }

    // console.log('newHeight %s', newHeight);
    return newHeight;
}
