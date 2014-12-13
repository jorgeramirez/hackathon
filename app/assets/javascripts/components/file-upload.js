Bursa.FileUploadComponent = Ember.Component.extend({

  showDropZone: true,

  allowFileDrop: true,
  
  model: [],

  idRecurso: null,

  multiple: false,

  initForEvents: function() {
    console.log('file upload init');

    var self = this;

    // This timer is a HUGE hack that hopefully doesn't bite.
    // We use it to ensure that when the mouse moves over the H2 element,
    // it doesn't cause the dropzone to close.
    var removeTimer = null;
    
    var dragDropEventHasFiles = function(evt) {
        try {
            return evt.dataTransfer.types.contains('Files');
        } catch(e) {}
        return false;
    };

    var addGlobalDropzone = function() {
        self.set('showGlobalDropZone', true);
    };
    
    var removeGlobalDropzone = function() {
        self.set('showGlobalDropZone', false);
    };
    
    $('#global-dropzone h2').on('dragover', function() {
        if(removeTimer) { Ember.run.cancel(removeTimer); }
        removeTimer = null;
    });
    
    $('#global-dropzone').on('click', removeGlobalDropzone);
    
    $('#dropzone').on('dragover', function(evt) {
        if(dragDropEventHasFiles(evt)) {
            if(self.get('allowFileDrop')) {
                addGlobalDropzone();
            }
            
            // If it's a file drop, go a head and eat it to prevent navigation
            return false;
        }
    });
    
    $('#dropzone').on('dragleave', function(evt) {
        if(dragDropEventHasFiles(evt)) {
          console.log(evt);
                console.log(evt.target);
            if(self.get('allowFileDrop') && evt.target.id == 'dropzone') {
                removeTimer = Ember.run.later(removeGlobalDropzone, 1);
            }

            // If it's a file drop, eat it to prevent navigation
            return false;
        }
    });
    
    $('#dropzone').on('drop', function(evt) {
        removeGlobalDropzone();
        
        if(dragDropEventHasFiles(evt)) {            
            if(self.get('allowFileDrop')) {
                self.send('filesDropped', evt.dataTransfer);
            }
        
            // If it's a file drop, eat it to prevent navigation
            return false;
        }
    });

    $('#dropzone').on('click', function(evt) {
        evt.preventDefault();
        //console.log(this);
        $(this).parent().find("input").click();
    });

  }.on('didInsertElement'),
    
  totalFileSize: function() {
      var total = 0;
      this.get('model').forEach(function(file) {
          total += file.get('rawSize');
      });
      return Bursa.humanReadableFileSize(total);
  }.property('model.@each.rawSize'),
  
  hasUploads: function() {
      return this.get('length') > 0;
  }.property('length'),
  
  hasCompleted: function() {
      return !!this.get('model').findProperty('didUpload');
  }.property('model.@each.didUpload'),
  
  actions: {
    filesDropped: function(files) {
        var model = this.get('model');
        var multiple = this.get('multiple');
        if (multiple) {
          for(var i = 0; i < files.files.length; i++) {
            var fileUploadModel = Bursa.FileUploadModel.create({ fileToUpload: files.files[i] });
            model.pushObject(fileUploadModel);
          }
        } else {
          var fileUploadModel = Bursa.FileUploadModel.create({ fileToUpload: files.files[0] });
          model.pushObject(fileUploadModel);
          this.set('showDropZone', false);
        }
    },

    fileSelected: function(file) {
        console.log("selectedfile");
        console.log(file);
        var model = this.get('model');
        
        var fileUploadModel = Bursa.FileUploadModel.create({ fileToUpload: file });
        model.pushObject(fileUploadModel);
        var multiple = this.get('multiple');
        if (!multiple) {
          this.set('showDropZone', false);
        }
    },

    removeFile: function(file) {
        this.get('model').removeObject(file);
        this.set('showDropZone', true);
    },
    
    removeCompleted: function() {
      var model = this.get('model');
      var completed = model.filterProperty('didUpload');
      model.removeObjects(completed);
      var multiple = this.get('multiple');
      if (!multiple && model.length == 0) {
        this.set('showDropZone', true);
      }

    },
    
    uploadFile: function(file, idRecurso) {
        var self = this;

        file.uploadFile(idRecurso).then(function(data) {
            console.log(data);
            self.set('url', data.url);
        });
    },
    
    uploadAll: function(idRecurso) {
        var self = this;
        this.get('model').forEach(function(item) {
            item.uploadFile(idRecurso).then(function(data) {
                console.log(data);
            });
        });
    },
  }

});
