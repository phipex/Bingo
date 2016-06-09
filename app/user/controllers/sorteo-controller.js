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

  SorteoCtrl.$inject = ['$state'];

  function SorteoCtrl($state) {
    var vm = this;
    vm.ctrlName = 'SorteoCtrl';
    console.log("SorteoCtrl",$state);



  }
}());
