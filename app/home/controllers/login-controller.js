/*jslint todo: true */
(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['Authentification',"$scope","events","$state"];

  function LoginCtrl(Authentification,$scope,events,$state) {
    console.log("llamando el controlador");
    var loginctrl = this;

    //modelos
    loginctrl.name = "";
    loginctrl.pass = "";

    //metodos
    loginctrl.signIn = signIn;


    /**
     * evento disparado por el boton que llama el servicio para crear la session del usuario
     */
    function signIn(){
      console.log("click en sign in");

      var nombre = loginctrl.name;
      var pass = loginctrl.pass;
      var isNoEmty = (nombre !== "" && pass !== "");
      console.log(nombre,pass,isNoEmty);
      if(isNoEmty){
        console.log("dentro del id",isNoEmty);
        // TODO mostrar un mensaje de cargando
        Authentification.login(nombre,pass)
          .then(function (result) {
            loginctrl.userInfo = result.usuario;
            console.info("loginctrl.userInfo",loginctrl.userInfo);
            //console.log($state.get('app'));
            $scope.$emit(events.ON_LOGIN_CHANGE,{usuario:result.usuario});

            $state.go('user',{}).then(function (argument) {
              console.log(argument);
            },function (a,b,c) {
              console.log(a,b,c);
            })

          }, function (error) {
            //$window.alert("Invalid credentials");
            console.log("Invalid credentials",error);
          });
      }//TODO poner como validacion en la lista que los 2 campos sean obligatorios, no lo hace el formulario?


    }


  }
}());
