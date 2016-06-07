/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoAdministrarCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoAdministrarCtrl');
  }));

  it('should have ctrlName as UserSorteoAdministrarCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoAdministrarCtrl');
  });
});
