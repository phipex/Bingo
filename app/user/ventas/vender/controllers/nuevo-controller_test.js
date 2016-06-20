/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('NuevoCtrl', function () {
  var ctrl;

  beforeEach(module('ventas.vender'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NuevoCtrl');
  }));

  it('should have ctrlName as NuevoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('NuevoCtrl');
  });
});
