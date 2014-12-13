/*global Bursa, PNotify */
(function() {
  'use strict';
  
  Bursa.Notification = {};
  Bursa.Notification.ERROR_MSG = "error";
  Bursa.Notification.SUCCESS_MSG = "success";

  Bursa.Notification.show = function(title, msg, msgType) {

    if(msgType === undefined) {
      msgType = Bursa.Notification.SUCCESS_MSG;
    }
    
    new PNotify({
      title: title,
      text: msg,
      type: msgType,
      animate_speed: 'fast'
    });
  };
})();
