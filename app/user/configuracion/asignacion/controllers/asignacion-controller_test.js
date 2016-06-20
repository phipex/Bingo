/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AsignacionCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.asignacion'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AsignacionCtrl');
  }));

  it('should have ctrlName as AsignacionCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AsignacionCtrl');
  });
});
