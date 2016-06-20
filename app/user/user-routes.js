(function () {
  'use strict';

  angular
    .module('user')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'user/views/user.tpl.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        data: {
          displayName: 'User'
        }
      })
      /*.state('user.sorteo', {
        url: '/sorteo',
        templateUrl: 'user/views/sorteo.tpl.html',
        controller: 'SorteoCtrl',
        controllerAs: 'sorteo',
        data: {
          displayName: 'Sorteo'
        }
      })
      .state('user.sorteo.controles', {
        parent: 'user.sorteo',
        url: '/controles',
        templateUrl: 'user/views/user-sorteo-controles.tpl.html',
        controller: 'UserSorteoControlesCtrl',
        controllerAs: 'userSorteoControles',
        data: {
          displayName: 'Controles'
        }
      })
      .state('user.sorteo.administrar', {
        parent: 'user.sorteo',
        url: '/administrar',
        templateUrl: 'user/views/user-sorteo-administrar.tpl.html',
        controller: 'UserSorteoAdministrarCtrl',
        controllerAs: 'userSorteoAdministrar',
        data: {
          displayName: 'Administrar'
        }
      })
      .state('user.sorteo.pagos', {
        parent: 'user.sorteo',
        url: '/pagos',
        templateUrl: 'user/views/user-sorteo-pagos.tpl.html',
        controller: 'UserSorteoPagosCtrl',
        controllerAs: 'userSorteoPagos',
        data: {
          displayName: 'Pagos'
        }
      })
      .state('user.sorteo.promociones', {
        parent: 'user.sorteo',
        url: '/promociones',
        templateUrl: 'user/views/user-sorteo-promociones.tpl.html',
        controller: 'UserSorteoPromocionesCtrl',
        controllerAs: 'userSorteoPromociones',
        data: {
          displayName: 'Promociones'
        }
      })
      .state('user.sorteo.nuevo', {
        url: '/nuevo',
        templateUrl: 'user/views/user-sorteo-nuevo.tpl.html',
        controller: 'UserSorteoNuevoCtrl',
        controllerAs: 'userSorteoNuevo',
        data: {
          displayName: 'Nuevo'
        }
      })*/
    ;
  }
}());
