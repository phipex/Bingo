(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name configuracion.figura.controller:FiguraCtrl
   *
   * @description
   *
   */
  angular
    .module('configuracion.figura')
    .controller('FiguraCtrl', FiguraCtrl);

  function FiguraCtrl() {
    var vm = this;
    vm.ctrlName = 'FiguraCtrl';
  }
}());
