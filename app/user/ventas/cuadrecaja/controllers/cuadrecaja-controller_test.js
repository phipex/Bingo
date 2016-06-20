/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CuadrecajaCtrl', function () {
  var ctrl;

  beforeEach(module('ventas.cuadrecaja'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CuadrecajaCtrl');
  }));

  it('should have ctrlName as CuadrecajaCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CuadrecajaCtrl');
  });
});
