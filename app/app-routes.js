(function () {
  'use strict';

  angular
    .module('bingo')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
