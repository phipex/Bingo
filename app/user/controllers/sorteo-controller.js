(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.controller:SorteoCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('SorteoCtrl', SorteoCtrl);

  function SorteoCtrl() {
    var vm = this;
    vm.ctrlName = 'SorteoCtrl';
  }
}());
