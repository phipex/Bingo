(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name sorteo.promociones.controller:PromocionesCtrl
   *
   * @description
   *
   */
  angular
    .module('sorteo.promociones')
    .controller('PromocionesCtrl', PromocionesCtrl);

  function PromocionesCtrl() {
    var vm = this;
    vm.ctrlName = 'PromocionesCtrl';
  }
}());
