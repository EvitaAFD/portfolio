'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function(){

    $('#about').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
