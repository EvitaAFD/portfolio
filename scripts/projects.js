'use strict';

//create constructor for projects
var allProjects = [];

function Project (opts) {

  for(var key in opts){
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function () {

  var $newProject = $('.template').clone();
  $newProject.removeClass('template');

  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('h1:first').text(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  console.log($newProject.html());
  return $newProject;
};

sourceData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});
// console.log('sourceData ' + sourceData);

allProjects.forEach(function(a){
  $('#project').append(a.toHtml());
});
