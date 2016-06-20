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
      .state('archivopremio.premio', {
        url: '/premio',
        templateUrl: 'user/configuracion/archivopremio/views/premio.tpl.html',
        controller: 'PremioCtrl',
        controllerAs: 'premio'
      })
      .state('archivopremio.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/archivopremio/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('archivopremio.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/archivopremio/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
