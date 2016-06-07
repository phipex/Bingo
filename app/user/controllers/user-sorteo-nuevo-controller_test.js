/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoNuevoCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoNuevoCtrl');
  }));

  it('should have ctrlName as UserSorteoNuevoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoNuevoCtrl');
  });
});
