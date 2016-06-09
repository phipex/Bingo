/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('VentasCtrl', function () {
  var ctrl;

  beforeEach(module('ventas.vender'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VentasCtrl');
  }));

  it('should have ctrlName as VentasCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VentasCtrl');
  });
});
