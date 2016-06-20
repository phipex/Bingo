/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('VenderCtrl', function () {
  var ctrl;

  beforeEach(module('ventas.vender'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VenderCtrl');
  }));

  it('should have ctrlName as VenderCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VenderCtrl');
  });
});
