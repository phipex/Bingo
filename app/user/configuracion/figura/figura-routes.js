(function () {
  'use strict';

  angular
    .module('configuracion.figura')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('figura', {
        url: '/figura',
        templateUrl: 'user/configuracion/figura/views/figura.tpl.html',
        controller: 'FiguraCtrl',
        controllerAs: 'figura'
      })
      .state('figura', {
        url: '/figura',
        templateUrl: 'user/configuracion/figura/views/figura.tpl.html',
        controller: 'FiguraCtrl',
        controllerAs: 'figura'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/figura/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/figura/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
