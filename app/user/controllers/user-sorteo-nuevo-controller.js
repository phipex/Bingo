(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.controller:UserSorteoNuevoCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('UserSorteoNuevoCtrl', UserSorteoNuevoCtrl);

  UserSorteoNuevoCtrl.$inject = ['$scope'];

  function UserSorteoNuevoCtrl($scope) {
    var vm = this;
    vm.ctrlName = 'UserSorteoNuevoCtrl';

    $scope.mytime = new Date();

    //$scope.dt = new Date();

    $scope.minDateTime = new Date();

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.popup2 = {
      opened: false
    };

    $scope.dateOptions = {

      minDate: $scope.minDateTime
    };

  }
}());
