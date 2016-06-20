/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('EditarCtrl', function () {
  var ctrl;

  beforeEach(module('sorteo.promociones'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('EditarCtrl');
  }));

  it('should have ctrlName as EditarCtrl', function () {
    expect(ctrl.ctrlName).toEqual('EditarCtrl');
  });
});