(function () {
  'use strict';

  angular
    .module('configuracion.asignacion')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('asignacion', {
        url: '/asignacion',
        templateUrl: 'user/configuracion/asignacion/views/asignacion.tpl.html',
        controller: 'AsignacionCtrl',
        controllerAs: 'asignacion'
      })
      .state('asignacion', {
        url: '/asignacion',
        templateUrl: 'user/configuracion/asignacion/views/asignacion.tpl.html',
        controller: 'AsignacionCtrl',
        controllerAs: 'asignacion'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/asignacion/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      });
  }
}());
