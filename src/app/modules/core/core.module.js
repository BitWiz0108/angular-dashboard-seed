(function() {
  'use strict';

  var core = angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.bootstrap',
    'ui.router'
  ]);

  core.config(appConfig);

  appConfig.$inject = ['$stateProvider'];
  function appConfig($stateProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>'
      });
  }
})();
