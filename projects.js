'use strict';

//create constructor for projects
var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
