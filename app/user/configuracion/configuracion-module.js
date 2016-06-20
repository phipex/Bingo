(function () {
  'use strict';

  /* @ngdoc object
   * @name user.configuracion
   * @description
   *
   */
  angular
    .module('user.configuracion', [
      'ui.router',
      'configuracion.usuario',
      'configuracion.persona',
      'configuracion.figura',
      'configuracion.grupofiguras',
      'configuracion.asignacion',
      'configuracion.archivoaudio',
      'configuracion.archivopremio',
      'configuracion.archivovideo'
    ]);
}());
