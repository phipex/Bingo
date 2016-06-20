(function () {
  'use strict';

  angular
    .module('sorteo.controles')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('controles', {
        url: '/controles',
        templateUrl: 'user/sorteo/controles/views/controles.tpl.html',
        controller: 'ControlesCtrl',
        controllerAs: 'controles'
      });
  }
}());
