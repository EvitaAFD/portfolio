'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
    $('#projects').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
