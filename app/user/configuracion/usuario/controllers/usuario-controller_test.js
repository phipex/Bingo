/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UsuarioCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.usuario'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UsuarioCtrl');
  }));

  it('should have ctrlName as UsuarioCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UsuarioCtrl');
  });
});
