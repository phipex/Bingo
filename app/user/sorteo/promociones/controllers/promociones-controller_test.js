/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PromocionesCtrl', function () {
  var ctrl;

  beforeEach(module('sorteo.promociones'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PromocionesCtrl');
  }));

  it('should have ctrlName as PromocionesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PromocionesCtrl');
  });
});
