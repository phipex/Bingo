/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ConfiguracionesCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.grupofiguras'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ConfiguracionesCtrl');
  }));

  it('should have ctrlName as ConfiguracionesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ConfiguracionesCtrl');
  });
});
