/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AuditoriaCtrl', function () {
  var ctrl;

  beforeEach(module('reportes.auditoria'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AuditoriaCtrl');
  }));

  it('should have ctrlName as AuditoriaCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AuditoriaCtrl');
  });
});
