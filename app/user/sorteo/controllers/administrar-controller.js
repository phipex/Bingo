(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.sorteo.controller:AdministrarCtrl
   *
   * @description
   *
   */
  angular
    .module('user.sorteo')
    .controller('AdministrarCtrl', AdministrarCtrl);

  AdministrarCtrl.$inject  = ['$state'];

  function AdministrarCtrl($state) {
    var vm = this;
    vm.ctrlName = 'AdministrarCtrl';

    console.log($state.get());
  }
}());
