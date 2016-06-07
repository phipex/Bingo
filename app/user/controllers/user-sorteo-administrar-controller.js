(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.controller:UserSorteoAdministrarCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('UserSorteoAdministrarCtrl', UserSorteoAdministrarCtrl);

  function UserSorteoAdministrarCtrl() {
    var vm = this;
    vm.ctrlName = 'UserSorteoAdministrarCtrl';
    console.log('UserSorteoAdministrarCtrl');
  }
}());
