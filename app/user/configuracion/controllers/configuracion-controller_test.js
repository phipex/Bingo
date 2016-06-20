/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ConfiguracionCtrl', function () {
  var ctrl;

  beforeEach(module('user.configuracion'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ConfiguracionCtrl');
  }));

  it('should have ctrlName as ConfiguracionCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ConfiguracionCtrl');
  });
});
