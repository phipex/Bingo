(function () {
  'use strict';

  angular
    .module('user')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'user/views/user.tpl.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        data: {
          displayName: 'User'
        }
      })
      
    ;
  }
}());
