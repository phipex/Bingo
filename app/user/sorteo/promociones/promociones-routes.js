(function () {
  'use strict';

  angular
    .module('sorteo.promociones')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('promociones', {
        url: '/promociones',
        templateUrl: 'user/sorteo/promociones/views/promociones.tpl.html',
        controller: 'PromocionesCtrl',
        controllerAs: 'promociones'
      })
      .state('promociones.promociones', {
        url: '/promociones',
        templateUrl: 'user/sorteo/promociones/views/promociones.tpl.html',
        controller: 'PromocionesCtrl',
        controllerAs: 'promociones'
      })
      .state('promociones.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/sorteo/promociones/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('promociones.editar', {
        url: '/editar',
        templateUrl: 'user/sorteo/promociones/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
