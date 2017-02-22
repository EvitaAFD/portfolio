'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function(){
    Project.fetchAll(projectView.initIndexPage);
    $('#about').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
