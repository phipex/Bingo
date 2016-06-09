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

  MainCtrl.$inject = ['$scope', 'Authentification', '$state', 'events', '$timeout','Recursos'];

  function MainCtrl($scope, Authentification, $state,events, $timeout,Recursos) {
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
    vm.userName = '';
    $scope.userName = vm.userName;
      /**
       * Hay un usuario logeado en este momento
       * @type {boolean}
       */
    vm.isLogIn = false;

    $scope.isLogIn = vm.isLogIn;

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



    // eventos

    /**
     * evento disparado cuando el estado del login cambia
     * (es llamado por el login)
     */
    $scope.$on(events.ON_LOGIN_CHANGE,function(event,data) {
      console.log("Events.ON_LOGIN_CHANGE",data);
      updateShowUser(data.usuario);
    });




    //verificar si esta logeado para entrar de una
    checkCurrentLogin();

    /**
     * Verifica si hay alguien logeado en el momento
     */
    function checkCurrentLogin() {
      var currentUser = Authentification.getCurrentUser();
      if(currentUser){
        updateShowUser(currentUser);
      }
    }

    /**
     * Actualiza el usuario actual
     * @param usuario
       */
    function updateShowUser(usuario){
      vm.isLogin = (usuario && usuario !== "");
      //console.log("vm.isLogin",vm.isLogin,"$scope.isLogin",$scope.isLogin);
      if (vm.isLogin) {
        vm.userName = usuario;
      }
    }

    /**
     * cierra la session del usuario actual
     */
    function clickSingOut() {
      console.log('clickSingOut');
      vm.isLogin = false;
      vm.userName = null;
      Recursos.clear();
      Authentification.logout();
      $state.go('home');
    }

    /**
     * evento que llama a la vista del login
     */
    function clickSingIn() {
      console.log('vamor para login');
      // TODO agregar un mensaje de cargando
      $state.go('login');
    }
  }
}());
