'use strict';

(function(module){
  const repoView = {};

  const ui = function () {
    let $projects = $('#projects');

    $projects.find('ul').empty();
    $projects.show().siblings().hide();
  };

  repoView.index = function () {
    ui();

    let render = Handlebars.compile($('#repo-template').text());

    $('#projects ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
