(function () {
  'use strict';

  angular
    .module('user.sorteo')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('sorteo', {
        parent: 'user',
        url: '/sorteo',
        templateUrl: 'user/sorteo/views/sorteo.tpl.html',
        controller: 'SorteoCtrl',
        controllerAs: 'sorteo',
        data: {
          displayName: 'Sorteo'
        }
      })
      /*.state('sorteo.administrar', {
        parent: 'sorteo',
        url: '/administrar',
        templateUrl: 'user/sorteo/views/user-sorteo-administrar.tpl.html',
        controller: 'AdministrarCtrl',
        controllerAs: 'administrar',
        data: {
          displayName: 'Administrar'
        }
      })
      .state('sorteo.controles', {
        parent: 'sorteo',
        url: '/controles',
        templateUrl: 'user/sorteo/views/user-sorteo-controles.tpl.html',
        controller: 'ControlesCtrl',
        controllerAs: 'controles',
        data: {
          displayName: 'Controles'
        }
      })
      .state('sorteo.nuevo', {
        parent: 'sorteo',
        url: '/nuevo',
        templateUrl: 'user/sorteo/views/user-sorteo-nuevo.tpl.html',
        controller: 'NuevoCtrl',
        controllerAs: 'nuevo',
        data: {
          displayName: 'Nuevo'
        }
      })
      .state('sorteo.pagos', {
        parent: 'sorteo',
        url: '/pagos',
        templateUrl: 'user/sorteo/views/user-sorteo-pagos.tpl.html',
        controller: 'PagosCtrl',
        controllerAs: 'pagos',
        data: {
          displayName: 'Pagos'
        }
      })
      .state('sorteo.promociones', {
        parent: 'sorteo',
        url: '/promociones',
        templateUrl: 'user/sorteo/views/user-sorteo-promociones.tpl.html',
        controller: 'PromocionesCtrl',
        controllerAs: 'promociones',
        data: {
          displayName: 'Promociones'
        }
      })
      .state('sorteo.editar', {
        parent: 'sorteo',
        url: '/editar/:sorteoId',
        templateUrl: 'user/sorteo/views/editar.tpl.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar',
        data: {
          displayName: 'Editar'
        }
      })*/
    ;
  }
}());
