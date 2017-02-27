'use strict';

(function(module) {
  const projectController = {};

  projectController.index = (ctx) => projectView.index(ctx.projects);

  projectController.loadAll = (ctx, next) => {
    let projectData =  () => {
      ctx.projects = Project.all;
      next();
    };

    if (Project.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };
  projectController.init = function(){

    $('#about').hide();
    $('#projects').show();
    repos.requestRepos(repoView.index);
  };

  module.projectController = projectController;
})(window);
