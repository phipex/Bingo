(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name configuracion.usuario.controller:UsuarioCtrl
   *
   * @description
   *
   */
  angular
    .module('configuracion.usuario')
    .controller('UsuarioCtrl', UsuarioCtrl);

  function UsuarioCtrl() {
    var vm = this;
    vm.ctrlName = 'UsuarioCtrl';
  }
}());
