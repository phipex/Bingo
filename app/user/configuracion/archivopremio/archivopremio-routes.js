(function () {
  'use strict';

  angular
    .module('configuracion.archivopremio')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archivopremio', {
        url: '/archivopremio',
        templateUrl: 'user/configuracion/archivopremio/views/archivopremio.tpl.html',
        controller: 'ArchivopremioCtrl',
        controllerAs: 'archivopremio'
      })
      .state('premio', {
        url: '/premio',
        templateUrl: 'user/configuracion/archivopremio/views/premio.tpl.html',
        controller: 'PremioCtrl',
        controllerAs: 'premio'
      })
      .state('nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/archivopremio/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/archivopremio/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
