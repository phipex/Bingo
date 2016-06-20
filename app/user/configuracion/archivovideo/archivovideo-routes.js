(function () {
  'use strict';

  angular
    .module('configuracion.archivovideo')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archivovideo', {
        url: '/archivovideo',
        templateUrl: 'user/configuracion/archivovideo/views/archivovideo.tpl.html',
        controller: 'ArchivovideoCtrl',
        controllerAs: 'archivovideo'
      })
      .state('archivovideo.video', {
        url: '/video',
        templateUrl: 'user/configuracion/archivovideo/views/video.tpl.html',
        controller: 'VideoCtrl',
        controllerAs: 'video'
      })
      .state('archivovideo.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/archivovideo/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('archivovideo.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/archivovideo/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
