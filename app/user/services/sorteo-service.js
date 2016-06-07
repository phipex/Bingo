(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name user.service:Sorteo
   *
   * @description
   *
   */
  angular
    .module('user')
    .service('Sorteo', Sorteo);

  function Sorteo() {
    var self = this;

    self.get = function () {
      return 'Sorteo';
    };
  }
}());
