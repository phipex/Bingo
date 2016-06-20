(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name ventas.vender.controller:VentasCtrl
   *
   * @description
   *
   */
  angular
    .module('ventas.vender')
    .controller('VentasCtrl', VentasCtrl);

  function VentasCtrl() {
    var vm = this;
    vm.ctrlName = 'VentasCtrl';
  }
}());
