(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name bingo.service:Authentification
   *
   * @description servicio encargado de gestionar el login y la session localmente
   *
   */
  angular
    .module('bingo')
    .service('Authentification', Authentification);

  Authentification.$inject = ['$http', '$q', '$window'];

  function Authentification($http, $q, $window) {

    var userInfo = {
      accessToken: null,
      userName: null
    };

    var USER_KEY = "userInfo";

    /**
     *
     */
    return {

      get: get,
      login: login,
      logout: logout,
      isLogin: isLogin,
      getAllowedRecurses: getAllowedRecurses,
      getCurrentUser: getCurrentUser,
      getCurrentToken: getCurrentToken
    };

    /**
     * @deprecated solo para test
     * @returns {string} nombre del servicio
       */
    function get(){
      return 'Authentification';
    }

    /**
     * autentifica el usuario
      * @param userName nombre del usuario
     * @param password password del usuario
     * @return {promise} promesa con la identificacion del usuario
       */
    function login(userName, password) {
      var deferred = $q.defer();

      var url = 'data/login.json';
        var server = "http://localhost:8084/war/jaxrs/seguridad";
      $http.post(server, {
        usuario: userName,
        clave: password
      }).then(function(result) {
        console.log(result);
        if(result.data.data){//verificar que si tenga token
          userInfo.accessToken= result.data.data;
          userInfo.userName= userName;

          var res = {"usuario": userName, "token": userInfo.accessToken};

          $window.sessionStorage[USER_KEY] = JSON.stringify(res);//FIX no guarda la session
          deferred.resolve(res);// clonar el objeto por seguridad
        }else{
          //alert("ahora no hay forma mono")
          deferred.reject({error:"datos no validos"});
        }


      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    /**
     * cierra la session del usuario
     *
     */
    function logout() {

      var server = "http://localhost:8084/war/jaxrs/seguridad/invalidar";
      $http.get(server, {
        token: userInfo.accessToken
      }).then(function(result) {
        console.log(result);
        if(result.data.data){
          userInfo.accessToken= null;
          userInfo.userName= null;
          $window.sessionStorage[USER_KEY] = null;
        }else{
        }
      }, function(error) {

      });
    }

    /**
     * infica si el usuario esta logeado segun la configuracion local
     */
    function isLogin() {
      var res = false;
      var sessionStorage = $window.sessionStorage[USER_KEY];
      var userInfo = (sessionStorage)?JSON.parse(sessionStorage):null;
      if(userInfo){
        res = true;
      }
      return res;
    }

      /**
       * Retorna los recursos permitidos para el rol del usuario actual
       */
    function getAllowedRecurses() {

    }

    /**
     * retorna el usuario actual
     * @return {*}
       */
    function getCurrentUser() {
      var sessionStorage = $window.sessionStorage[USER_KEY];
        var userInfo = (sessionStorage)?JSON.parse(sessionStorage):null;
      if(userInfo){
        return userInfo.usuario;
      }
      return null;
    }

    /**
     * retorna el token actual
     * @return {*}
       */
    function getCurrentToken() {
      var sessionStorage = $window.sessionStorage[USER_KEY];
      var userInfo = (sessionStorage)?JSON.parse(sessionStorage):null;
      if(userInfo){
        return userInfo.token;
      }
      return null;
    }
  }
}());
