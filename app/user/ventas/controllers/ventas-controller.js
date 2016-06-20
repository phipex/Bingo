(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.ventas.controller:VentasCtrl
   *
   * @description
   *
   */
  angular
    .module('user.ventas')
    .controller('VentasCtrl', VentasCtrl);

  function VentasCtrl() {
    var vm = this;
    vm.ctrlName = 'VentasCtrl';
  }
}());
