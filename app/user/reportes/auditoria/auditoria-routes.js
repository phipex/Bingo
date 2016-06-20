(function () {
  'use strict';

  angular
    .module('reportes.auditoria')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('auditoria', {
        url: '/auditoria',
        templateUrl: 'user/reportes/auditoria/views/auditoria.tpl.html',
        controller: 'AuditoriaCtrl',
        controllerAs: 'auditoria'
      })
      .state('auditoria.auditoria', {
        url: '/auditoria',
        templateUrl: 'user/reportes/auditoria/views/auditoria.tpl.html',
        controller: 'AuditoriaCtrl',
        controllerAs: 'auditoria'
      });
  }
}());
