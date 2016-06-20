(function () {
  'use strict';

  angular
    .module('user.configuracion')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('configuracion', {
        url: '/configuracion',
        templateUrl: 'user/configuracion/views/configuracion.tpl.html',
        controller: 'ConfiguracionCtrl',
        controllerAs: 'configuracion'
      });
  }
}());
