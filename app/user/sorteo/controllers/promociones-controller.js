(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.sorteo.controller:PromocionesCtrl
   *
   * @description
   *
   */
  angular
    .module('user.sorteo')
    .controller('PromocionesCtrl', PromocionesCtrl);

  function PromocionesCtrl() {
    var vm = this;
    vm.ctrlName = 'PromocionesCtrl';
  }
}());
