/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PersonaCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.persona'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PersonaCtrl');
  }));

  it('should have ctrlName as PersonaCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PersonaCtrl');
  });
});
