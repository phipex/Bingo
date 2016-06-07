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

  UserCtrl.$inject = ['Authentification','$state','Recursos','$scope'];

  function UserCtrl(Authentification,$state,Recursos,$scope) {
    var userctrl = this;
    userctrl.ctrlName = 'UserCtrl';


    ////// modelos
    userctrl.menu = [];

    ///// eventos
    $scope.clickMenu = clickMenu;

    inicializarInterfaz();

    function inicializarInterfaz() {
      var isLogin = Authentification.isLogin();

      if(!isLogin) {
        $state.go('home');
      }else{
        requestAllowRecurses();
      }
    }

    ///// configuracion
    $scope.oneAtATime = true;

    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };


    function clickMenu(objeto) {
      console.log("clickmenu",objeto);
      //var state = objeto.state;
      var state=objeto;
      console.log(state);
      $state.go('user.'+state);
    }

    // TODO solicitar los recursos para el usuario
    /**
     * Solicita los recursos y llena el menu
     */
    function requestAllowRecurses() {
      Recursos.getRecurses().then(function (recurses) {
        console.log("requestAllowRecurses",recurses);


          for (var i = 0, len=arguments.length; i < len; i++) {
            var obj = arguments[i];
            for (var j = 0; j < recurses.length; j++) {
              var obj1 = recurses[j];
              obj1.open = false;

            }
            
          }
          userctrl.menu = recurses;
      },
      function (res) {
        console.log(res);
      });

    }



    // TODO mostrar un menu con los servicios del usuario
  }
}());
