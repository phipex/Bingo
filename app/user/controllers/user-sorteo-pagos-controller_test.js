/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UserSorteoPagosCtrl', function () {
  var ctrl;

  beforeEach(module('user'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserSorteoPagosCtrl');
  }));

  it('should have ctrlName as UserSorteoPagosCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserSorteoPagosCtrl');
  });
});
