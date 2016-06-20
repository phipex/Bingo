(function () {
  'use strict';

  angular
    .module('sorteo.administrar')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('administrar', {
        url: '/administrar',
        templateUrl: 'user/sorteo/administrar/views/administrar.tpl.html',
        controller: 'AdministrarCtrl',
        controllerAs: 'administrar'
      });
  }
}());
