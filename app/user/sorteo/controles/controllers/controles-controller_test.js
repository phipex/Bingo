/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ControlesCtrl', function () {
  var ctrl;

  beforeEach(module('sorteo.controles'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ControlesCtrl');
  }));

  it('should have ctrlName as ControlesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ControlesCtrl');
  });
});
