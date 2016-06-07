/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoCtrl');
  }));

  it('should have ctrlName as UserSorteoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoCtrl');
  });
});
