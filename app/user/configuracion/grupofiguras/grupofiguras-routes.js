(function () {
  'use strict';

  angular
    .module('configuracion.grupofiguras')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('grupofiguras', {
        url: '/grupofiguras',
        templateUrl: 'user/configuracion/grupofiguras/views/grupofiguras.tpl.html',
        controller: 'GrupofigurasCtrl',
        controllerAs: 'grupofiguras'
      })
      .state('grupofiguras.configuraciones', {
        url: '/configuraciones',
        templateUrl: 'user/configuracion/grupofiguras/views/configuraciones.tpl.html',
        controller: 'ConfiguracionesCtrl',
        controllerAs: 'configuraciones'
      })
      .state('grupofiguras.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/grupofiguras/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('grupofiguras.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/grupofiguras/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());