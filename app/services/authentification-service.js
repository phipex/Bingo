(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name bingo.service:Authentification
   *
   * @description servicio encargado de gestionar el login
   *
   */
  angular
    .module('bingo')
    .service('Authentification', Authentification);

  function Authentification() {
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
      isLogin: isLogin
    };

    function get() {
      return 'Authentification';
    }

    function login(userName, password) {

    }

    function logout() {

    }

    function isLogin() {

    }

  }
}());
