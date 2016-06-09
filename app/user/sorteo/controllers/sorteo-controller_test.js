/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SorteoCtrl', function () {
  var ctrl;

  beforeEach(module('user.sorteo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SorteoCtrl');
  }));

  it('should have ctrlName as SorteoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SorteoCtrl');
  });
});
