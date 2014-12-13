
Bursa.FileUploadModel = Ember.Object.extend({
    init: function() {
        this._super();
        Ember.assert("File to upload required on init.", !!this.get('fileToUpload'));
        this.set('uploadPromise', Ember.Deferred.create());
    },

    readFile: function() {
        var self = this;
        var fileToUpload = this.get('fileToUpload');
        var isImage = fileToUpload.type.indexOf('image') === 0;
        
        this.set('name', fileToUpload.name);
        this.set('rawSize', fileToUpload.size);
        this.set('size', Bursa.humanReadableFileSize(fileToUpload.size));
        
        // Don't read anything bigger than 5 MB
        if(isImage && fileToUpload.size < 5*1024*1024) {
            this.set('isDisplayableImage', isImage);
            
            // Create a reader and read the file.
            var reader = new FileReader();
            reader.onload = function(e) {
                self.set('base64Image', e.target.result);
            };

            // Read in the image file as a data URL.
            reader.readAsDataURL(fileToUpload);
        }
    }.on('init'),

    // ...........................................
    // Name is used for the upload property
    name: '',
    
    // {Property} Human readable size of the selected file
    size: "0 KB",
    
    // {Property} Raw file size of the selected file
    rawSize: 0,

    // {Property} Indicates if this file is an image we can display
    isDisplayableImage: false,
    
    // {Property} String representation of the file
    base64Image: '',
    
    // {Property} Will be an HTML5 File
    fileToUpload: null,
    
    // {Property} Will be a $.ajax jqXHR 
    uploadJqXHR: null,
    
    // {Property} Promise for when a file was uploaded
    uploadPromise: null,
    
    // {Property} Upload progress 0-100 
    uploadProgress: null,
    
    // {Property} If a file is currently being uploaded
    isUploading: false,
    
    // {Property} If the file was uploaded successfully
    didUpload: false,
    
    apiNamespace: '/api/v1/',

    factory: 'productos',

    restVerb: 'foto',
    // ..........................................................
    // Actually do something!
    //    
    uploadFile: function(id) {
        if(this.get('isUploading') || this.get('didUpload') || this.get('didError')) { 
            return this.get('uploadPromise');
        }
        
        var fileToUpload = this.get('fileToUpload');
        var name = this.get('name');
        var fd = new FormData();
        var api = this.get('apiNamespace');
        var attribute = this.get('restVerb');
        var urlService = api + this.get('factory') +'/' + id + '/' + attribute;
        var self = this;

        fd.append('Content-Type', fileToUpload.type);
        fd.append(attribute, fileToUpload);


        this.set('isUploading', true);


        $.ajax({
            url: urlService,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            xhr: function() {
                var xhr = $.ajaxSettings.xhr() ;
                // set the onprogress event handler
                xhr.upload.onprogress = function(evt) { 
                    self.set('progress', (evt.loaded/evt.total*100));
                };
                return xhr ;
            }
        }).done(function(data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);

            self.set('isUploading', false);
            self.set('didUpload', true);
            self.get('uploadPromise').resolve(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            self.set('isUploading', false);
            self.set('didError', true);
            self.get('uploadPromise').reject(errorThrown);
        });
        
        return this.get('uploadPromise');
    },
    
    // ..........................................................
    // Progress support, this belongs in a component. Ran out of time.
    // 
    showProgressBar: Ember.computed.or('isUploading'),

    progressStyle: function() {
        return 'width: %@%'.fmt(this.get('progress'));
    }.property('progress')
});

// Helper to build human readible file size strings.
Bursa.humanReadableFileSize = function(size) {
    var label = "";
    if(size == 0) {
        label = "0 KB";
    } else if(size && !isNaN(size)) {
        var fileSizeInBytes = size;
        var i = -1;
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        var byteUnits = [' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
        label += Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    }
    return label;
};
