(function () {
  'use strict';

  /* @ngdoc object
   * @name user
   * @description
   *
   */
  angular
    .module('user', [
      'ui.router',
      'user.ventas',
      'user.sorteo',
      'user.reportes',
      'user.parametros',
      'user.configuracion'
    ]);
}());
