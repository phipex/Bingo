(function () {
  'use strict';

  angular
    .module('user.ventas')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('ventas', {
        url: '/ventas',
        templateUrl: 'user/ventas/views/ventas.tpl.html',
        controller: 'VentasCtrl',
        controllerAs: 'ventas'
      });
  }
}());
