
Bursa.UploadButtonView = Ember.View.extend({
    tagName: 'input',
    attributeBindings: ['type'],
    type: 'file',
    id: 'fileUpload',


    change: function (e) {
        var appController = this.get('controller');
        var files = this.$().get(0).files;
        if (files.length > 0) {
            appController.send('fileSelected', files[0]);
        }
    }
});