'use strict';

var projectsView = {}

projectsView.handleNavBar = function () {
  $('.main-nav-bar').on('click', '.tab', function() {
    $('.nav-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav-bar .tab:first').click();
};


projectsView.initProjectPage = function (){
  Project.all.forEach(function (a){
    $('#projects').append(a.toHtml())
  });
  projectsView.handleNavBar();
}
