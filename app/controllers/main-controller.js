(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name bingo.controller:MainCtrl
   *
   * @description controlador del marco principal
   *
   */
  angular
    .module('bingo')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['Authentification','$state'];

  function MainCtrl(Authentification,$state) {
    var vm = this;

    /* modelos */
    /**
     * Nombre del controlador
     * @type {string}
       */
    vm.ctrlName = 'MainCtrl';

    /**
     * Nombre del usuario
     * @type {string}
       */
    vm.userName = 'Rata';

      /**
       * Hay un usuario logeado en este momento
       * @type {boolean}
       */
    vm.isLogIn = false;

    // eventos

      /**
       * evento llamado cuando se desea ingresar al sistema, llama a login
       * @type {clickSingIn}
       */
    vm.clickSingIn = clickSingIn;

      /**
       * Evento llamado cuando se desea salir del sistema, llama a la ventana principal
       * @type {clickSingOut}
       */
    vm.clickSingOut = clickSingOut;



    function clickSingOut() {
      console.log('clickSingOut');
      vm.isLogIn = false;
      $state.go('home');
    }

    function clickSingIn() {

      var userName, password;
      console.log('clickSingIn');
      vm.isLogIn = true;
      Authentification.login(userName, password);
      $state.go('user');
    }

  }

}());
