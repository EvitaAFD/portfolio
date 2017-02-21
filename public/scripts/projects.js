'use strict';

//create constructor for projects
function Project (opts) {

  for(var key in opts){
    this[key] = opts[key];
    console.log(this[key]);
  }
}

Project.prototype.toHtml = function () {

  let template = Handlebars.compile($('#project-template').html());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  console.log(template);
  return template(this);
};

Project.all = [];

Project.loadAll = function(rawData) {

  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function () {
  if(localStorage.sourceData) {
    console.log('loading from local storage');
    Project.loadAll(JSON.parse(localStorage.getItem('sourceData')));
    projectsView.initProjectPage();
  } else {
    $.getJSON('data/portfolioProjects.json')
    .then(function(data){
      Project.loadAll(data);
      localStorage.setItem('sourceData', JSON.stringify(data));
      projectsView.initProjectPage();
    }, function(err) {
      console.log('Error:', err);
    });
  }
};
