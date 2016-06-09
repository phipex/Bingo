/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('NuevoCtrl', function () {
  var ctrl;

  beforeEach(module('user.sorteo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NuevoCtrl');
  }));

  it('should have ctrlName as NuevoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('NuevoCtrl');
  });
});
