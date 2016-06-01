(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name user.controller:UserCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['Authentification','$state'];

  function UserCtrl(Authentification,$state) {
    var vm = this;
    vm.ctrlName = 'UserCtrl';

    var isLogin = Authentification.isLogin();

    if(!isLogin) {
      $state.go('home');
    }

    // TODO solicitar los recursos para el usuario
    function requestAllowRecurses() {
      Authentification.requestAllowRecurses();
    }

    // TODO mostrar un menu con los servicios del usuario
  }
}());
