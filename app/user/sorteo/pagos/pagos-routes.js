(function () {
  'use strict';

  angular
    .module('sorteo.pagos')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('pagos', {
        url: '/pagos',
        templateUrl: 'user/sorteo/pagos/views/pagos.tpl.html',
        controller: 'PagosCtrl',
        controllerAs: 'pagos'
      })
      .state('pagos', {
        url: '/pagos',
        templateUrl: 'user/sorteo/pagos/views/pagos.tpl.html',
        controller: 'PagosCtrl',
        controllerAs: 'pagos'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/sorteo/pagos/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      });
  }
}());
