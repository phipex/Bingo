/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdministrarCtrl', function () {
  var ctrl;

  beforeEach(module('user.sorteo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdministrarCtrl');
  }));

  it('should have ctrlName as AdministrarCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdministrarCtrl');
  });
});
