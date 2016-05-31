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

  function Authentification() {
    // TODO cambiar de diseño

    /* var self = this;

    self.get = function () {
      return 'Authentification';
    };*/

    /**
     *
     */
    return {

      get: get,
      login: login,
      logout: logout,
      isLogin: isLogin,
      getAllowedRecurses: getAllowedRecurses
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

    }

    /**
     * cierra la session del usuario
     *
     */
    function logout() {

    }

    /**
     * infica si el usuario esta logeado segun la configuracion local
     */
    function isLogin() {

    }

      /**
       * Retorna los recursos permitidos para el rol del usuario actual
       */
    function getAllowedRecurses() {

    }
  }
}());
