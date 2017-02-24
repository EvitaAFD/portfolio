'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

$.get('github/user/repos')

    .then(data => {
      repos.all = data;
      console.log(data);
    },
    err => console.error(err))
    .then(callback);
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
