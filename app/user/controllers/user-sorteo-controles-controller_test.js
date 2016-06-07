/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoControlesCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoControlesCtrl');
  }));

  it('should have ctrlName as UserSorteoControlesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoControlesCtrl');
  });
});
