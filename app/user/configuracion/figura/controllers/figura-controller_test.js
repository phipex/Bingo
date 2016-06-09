/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FiguraCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.figura'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('FiguraCtrl');
  }));

  it('should have ctrlName as FiguraCtrl', function () {
    expect(ctrl.ctrlName).toEqual('FiguraCtrl');
  });
});
