(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name configuracion.persona.controller:PersonaCtrl
   *
   * @description
   *
   */
  angular
    .module('configuracion.persona')
    .controller('PersonaCtrl', PersonaCtrl);

  function PersonaCtrl() {
    var vm = this;
    vm.ctrlName = 'PersonaCtrl';
  }
}());
