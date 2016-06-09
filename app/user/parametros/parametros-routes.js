(function () {
  'use strict';

  angular
    .module('user.parametros')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('parametros', {
        parent: 'user',
        url: '/parametros',
        templateUrl: 'user/parametros/views/parametros.tpl.html',
        controller: 'ParametrosCtrl',
        controllerAs: 'parametros'
      });
  }
}());
