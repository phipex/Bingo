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

  UserCtrl.$inject = ['Authentification'];

  function UserCtrl(Authentification) {
    var vm = this;
    vm.ctrlName = 'UserCtrl';

    //TODO verificar si el usuario esta logeado
    var isLogin = Authentification.isLogin();

    if(isLogin){

    }

    //TODO solicitar los recursos para el usuario
    function requestAllowRecurses() {

    }

    //TODO mostrar un menu con los servicios del usuario

  }
}());
