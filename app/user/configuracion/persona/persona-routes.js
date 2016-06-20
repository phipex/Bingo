(function () {
  'use strict';

  angular
    .module('configuracion.persona')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('persona', {
        url: '/persona',
        templateUrl: 'user/configuracion/persona/views/persona.tpl.html',
        controller: 'PersonaCtrl',
        controllerAs: 'persona'
      })
      .state('persona.persona', {
        url: '/persona',
        templateUrl: 'user/configuracion/persona/views/persona.tpl.html',
        controller: 'PersonaCtrl',
        controllerAs: 'persona'
      })
      .state('persona.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/configuracion/persona/views/nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo'
      })
      .state('persona.editar', {
        url: '/editar',
        templateUrl: 'user/configuracion/persona/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      });
  }
}());
