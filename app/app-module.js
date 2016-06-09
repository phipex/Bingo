(function () {
  'use strict';

  /* @ngdoc object
   * @name bingo
   * @description
   *
   */
  angular
    .module('bingo', [
      // librerias
      'ngAria',
      'ui.router',
      'ui.bootstrap',
      'ngAnimate',
      'angularUtils.directives.uiBreadcrumbs',
      // modulos
      'home',
      'user'

    ]);
}());
