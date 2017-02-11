'use strict';

//create constructor for projects
var allProjects = [];

function Project (opts) {

  for(var key in opts){
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function () {

  var $newProject = $('project.template').clone().removeClass('template');

  $newProject.find('.byline a').attr('href', this.projectUrl);
  $newProject.find('h1:first').text(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newProject;
};
