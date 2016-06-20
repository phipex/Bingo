/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ReportesCtrl', function () {
  var ctrl;

  beforeEach(module('user.reportes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ReportesCtrl');
  }));

  it('should have ctrlName as ReportesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ReportesCtrl');
  });
});
