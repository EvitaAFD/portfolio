'use strict';

(function(module){
  const repoView = {};

  const ui = function () {
    let $projects = $('#projects');

    $projects.empty();
    $projects.show();
  };

  repoView.index = function () {
    ui();

    let render = Handlebars.compile($('#repo-template').text());

    $('#projects').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
