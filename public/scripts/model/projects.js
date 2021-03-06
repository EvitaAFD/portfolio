'use strict';

//create constructor for projects
(function(module) {

  function Project (opts) {

    Object.keys(opts).forEach(e => this[e] = opts[e]);

  }

  Project.all = [];

  Project.prototype.toHtml = function () {

    let template = Handlebars.compile($('#project-template').html());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    return template(this);
  };


  Project.loadAll = function(rawData) {

    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    })
  }

    //added meaningless word count
  Project.wordCount = () => {
    let words = Project.all.map((e) => {
      return e.body.split(' ').length;
    }).reduce(function(acc, val){return acc + val; }, 0)
    return words;
  };

  module.Project = Project;
})(window);
