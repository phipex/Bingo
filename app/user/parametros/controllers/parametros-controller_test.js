/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ParametrosCtrl', function () {
  var ctrl;

  beforeEach(module('user.parametros'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ParametrosCtrl');
  }));

  it('should have ctrlName as ParametrosCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ParametrosCtrl');
  });
});
