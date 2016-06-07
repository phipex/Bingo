/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoPromocionesCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoPromocionesCtrl');
  }));

  it('should have ctrlName as UserSorteoPromocionesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoPromocionesCtrl');
  });
});
