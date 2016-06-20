(function () {
  'use strict';

  angular
    .module('configuracion.archivoaudio')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archivoaudio', {
        url: '/archivoaudio',
        templateUrl: 'user/configuracion/archivoaudio/views/archivoaudio.tpl.html',
        controller: 'ArchivoaudioCtrl',
        controllerAs: 'archivoaudio'
      })
      .state('archivoaudio.audio', {
        url: '/audio',
        templateUrl: 'user/configuracion/archivoaudio/views/audio.tpl.html',
        controller: 'AudioCtrl',
        controllerAs: 'audio'
      })
      .state('archivoaudio.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/archivoaudio/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('archivoaudio.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/archivoaudio/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
