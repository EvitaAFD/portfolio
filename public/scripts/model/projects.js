'use strict';

//create constructor for projects
(function(module) {

  function Project (opts) {

    Object.keys(opts).forEach(e => this[e] = opts[e]);

  }

  Project.all = [];

  Project.loadAll = rows => {
      rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
      Project.all = rows.map(ele => new Project(ele));
    };

    Project.fetchAll = callback => {
      $.get('/projects')
      .then(
        results => {
          if (results.length) {
            Project.loadAll(results);
            callback();
          } else {
            $.getJSON('./data/portfolioProjects')
            .then(rawData => {
              rawData.forEach(item => {
                let project = new Project(item);
                project.insertRecord();
              })
            })
            .then(() => Project.fetchAll(callback))
            .catch(console.error);
          }
        }
      )
    };

  module.Project = Project;
})(window);
