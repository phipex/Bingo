(function () {
  'use strict';

  angular
    .module('ventas.cuadrecaja')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('cuadrecaja', {
        url: '/cuadrecaja',
        templateUrl: 'user/ventas/cuadrecaja/views/cuadrecaja.tpl.html',
        controller: 'CuadrecajaCtrl',
        controllerAs: 'cuadrecaja'
      })
      .state('cuadrecaja', {
        url: '/cuadrecaja',
        templateUrl: 'user/ventas/cuadrecaja/views/cuadrecaja.tpl.html',
        controller: 'CuadrecajaCtrl',
        controllerAs: 'cuadrecaja'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/ventas/cuadrecaja/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      });
  }
}());
