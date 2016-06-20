(function () {
  'use strict';

  angular
    .module('configuracion.usuario')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('usuario', {
        url: '/usuario',
        templateUrl: 'user/configuracion/usuario/views/usuario.tpl.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
      })
      .state('usuario.usuario', {
        url: '/usuario',
        templateUrl: 'user/configuracion/usuario/views/usuario.tpl.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
      })
      .state('usuario.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/usuario/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('usuario.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/usuario/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
