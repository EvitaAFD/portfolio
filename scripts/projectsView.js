'use strict';

var projectsView = {}

projectsView.handleNavBar = function () {
  $('.main-nav-bar').on('click', '.tab', function() {
    $('.nav-content').hide();
    // console.log('.tab clicked:', $(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav-bar .tab:first').click();
};


projectsView.handleNavBar();
