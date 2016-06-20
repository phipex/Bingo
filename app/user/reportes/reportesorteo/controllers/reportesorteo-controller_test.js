/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ReportesorteoCtrl', function () {
  var ctrl;

  beforeEach(module('reportes.reportesorteo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ReportesorteoCtrl');
  }));

  it('should have ctrlName as ReportesorteoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ReportesorteoCtrl');
  });
});
