(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name ventas.vender.controller:VenderCtrl
   *
   * @description
   *
   */
  angular
    .module('ventas.vender')
    .controller('VenderCtrl', VenderCtrl);

  function VenderCtrl() {
    var vm = this;
    vm.ctrlName = 'VenderCtrl';
  }
}());
