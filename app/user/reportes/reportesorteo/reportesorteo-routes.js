(function () {
  'use strict';

  angular
    .module('reportes.reportesorteo')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('reportesorteo', {
        url: '/reportesorteo',
        templateUrl: 'user/reportes/reportesorteo/views/reportesorteo.tpl.html',
        controller: 'ReportesorteoCtrl',
        controllerAs: 'reportesorteo'
      })
      .state('sorteo', {
        url: '/sorteo',
        templateUrl: 'user/reportes/reportesorteo/views/sorteo.tpl.html',
        controller: 'SorteoCtrl',
        controllerAs: 'sorteo'
      });
  }
}());
