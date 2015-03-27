(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('App', AppController);

  AppController.$inject = ['config', '$scope', '$state', '$rootScope', 'shortHistory', 'authorize'];
  function AppController(config, $scope, $state, $rootScope, shortHistory, authorize) {
    /*jshint validthis: true */
    var vm = this;

    vm.title = config.appTitle;

    $scope.app = config;
    $scope.$state = $state;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      authorize.checkAccess(event, toState, toParams);
    });

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      $('body').toggleClass('nav-shown', false); //TODO: shitty, change later (all the callback, by the way :) )
    });

    shortHistory.init($scope);
  }

})();
