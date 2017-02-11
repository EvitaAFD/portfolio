'use strict';

//create constructor for projects
var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.projectURL = opts.projectURL;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
