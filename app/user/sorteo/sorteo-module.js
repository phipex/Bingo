(function () {
  'use strict';

  /* @ngdoc object
   * @name user.sorteo
   * @description
   *
   */
  angular
    .module('user.sorteo', [
      'ui.router',
      'sorteo.administrar',
      'sorteo.controles',
      'sorteo.pagos',
      'sorteo.promociones'
    ]);
}());
