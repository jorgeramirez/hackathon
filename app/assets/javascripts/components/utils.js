/*global Bursa, PNotify, $, console, moment */
/**
 * Helpers varios
 *
 * @author Jorge Ramírez <jorge@codium.com.py>
 **/
(function() {
  'use strict';
  
  var Utils = {};

  Utils.disableElement = function(selector) {
   
    if(selector === undefined) {
      console.error('Selector no especificado');
      return;
    }
    $(selector).attr('disabled','disabled');
  };


  Utils.enableElement = function(selector) {
    
    if(selector === undefined) {
      console.error('Selector no especificado');
      return;
    }
    $(selector).removeAttr('disabled');
  };

  /**
   * Retorna la fecha actual como string en el formato DD/MM/YYYY
   **/
  Utils.getCurrentDate = function(dateFormat) {
    
    if(dateFormat === undefined){
      dateFormat = 'DD/MM/YYYY';
    }
    return moment(new Date()).format(dateFormat);
  };
  
  Bursa.Utils = Utils;
})();
