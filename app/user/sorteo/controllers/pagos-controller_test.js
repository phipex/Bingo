/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PagosCtrl', function () {
  var ctrl;

  beforeEach(module('user.sorteo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PagosCtrl');
  }));

  it('should have ctrlName as PagosCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PagosCtrl');
  });
});
