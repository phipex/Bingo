(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'home/views/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginctrl'
      });
  }
}());
