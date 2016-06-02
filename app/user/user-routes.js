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
        controllerAs: 'user'
      })
      .state('user.sorteo', {
        url: '/sorteo',
        templateUrl: 'user/views/sorteo.tpl.html',
        controller: 'SorteoCtrl',
        controllerAs: 'sorteo'
      });
  }
}());
