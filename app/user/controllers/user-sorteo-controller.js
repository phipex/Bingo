(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.controller:UserSorteoCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('UserSorteoCtrl', UserSorteoCtrl);

  function UserSorteoCtrl() {
    var vm = this;
    vm.ctrlName = 'UserSorteoCtrl';
  }
}());
