(function () {
  'use strict';

  /* @ngdoc object
   * @name user.reportes
   * @description
   *
   */
  angular
    .module('user.reportes', [
      'ui.router',
      'reportes.auditoria',
      'reportes.reportesorteo'
    ]);
}());
