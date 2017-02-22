'use strict';
(function (module) {
  var projectsView = {};
  projectsView.initProjectPage = function () {
    Project.all.forEach(function (a) {
      $('#projects').append(a.toHtml());
    });
    projectsView.addWordCount();
  };
  projectsView.addWordCount = function () {
    $('.words').text(Project.wordCount());
  };
  Project.fetchAll = function () {
    if (localStorage.sourceData) {
      console.log('loading from local storage');
      Project.loadAll(JSON.parse(localStorage.getItem('sourceData')));
      projectsView.initProjectPage();
    } else {
      $.getJSON('data/portfolioProjects.json')
        .then(function (data) {
          Project.loadAll(data);
          localStorage.setItem('sourceData', JSON.stringify(data));
          projectsView.initProjectPage();
        }, function (err) {
          console.log('Error:', err);
        });
    }
  };
  Project.fetchAll(projectsView.initIndexPage);
  module.projectsView = projectsView;
})(window);
