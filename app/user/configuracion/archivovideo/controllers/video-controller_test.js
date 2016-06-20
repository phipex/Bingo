/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('VideoCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivovideo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VideoCtrl');
  }));

  it('should have ctrlName as VideoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VideoCtrl');
  });
});
