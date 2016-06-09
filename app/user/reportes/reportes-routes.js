(function () {
  'use strict';

  angular
    .module('user.reportes')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('reportes', {
        url: '/reportes',
        templateUrl: 'user/reportes/views/reportes.tpl.html',
        controller: 'ReportesCtrl',
        controllerAs: 'reportes'
      });
  }
}());
