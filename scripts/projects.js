'use strict';

//create constructor for projects
var allProjects = [];

function Project (opts) {

  for(var key in opts){
    this[key] = opts[key];
    console.log(this[key]);
  }
}

Project.prototype.toHtml = function () {

  var template = Handlebars.compile($('#article-template').html());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  console.log(template);
  return template(this);
};

sourceData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});
// console.log('sourceData ' + sourceData);

allProjects.forEach(function(a){
  $('#project').append(a.toHtml());
});
