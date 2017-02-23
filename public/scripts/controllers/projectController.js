'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function(){

    $('#about').hide();
    $('#projects').show();
    repos.requestRepos(repoView.index);
  };

  module.projectController = projectController;
})(window);
