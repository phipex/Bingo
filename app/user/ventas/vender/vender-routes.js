(function () {
  'use strict';

  angular
    .module('ventas.vender')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('vender', {
        url: '/vender',
        templateUrl: 'user/ventas/vender/views/vender.tpl.html',
        controller: 'VenderCtrl',
        controllerAs: 'vender'
      })
      .state('ventas.vender', {
        url: '/ventas',
        templateUrl: 'user/ventas/vender/views/ventas.tpl.html',
        controller: 'VentasCtrl',
        controllerAs: 'ventas'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/ventas/vender/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      });
  }
}());
