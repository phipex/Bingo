(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.sorteo.controller:EditarCtrl
   *
   * @description
   *
   */
  angular
    .module('user.sorteo')
    .controller('EditarCtrl', EditarCtrl);

  EditarCtrl.$inject = ['$stateParams'];

  function EditarCtrl($stateParams) {
    var vm = this;
    vm.ctrlName = 'EditarCtrl';
    
    vm.parametros = $stateParams;
  }
}());
