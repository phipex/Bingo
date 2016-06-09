(function () {
  'use strict';

  /* @ngdoc object
   * @name user.ventas
   * @description
   *
   */
  angular
    .module('user.ventas', [
      'ui.router',
      'ventas.cuadrecaja',
      'ventas.vender'
    ]);
}());
