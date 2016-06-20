/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PremioCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivopremio'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PremioCtrl');
  }));

  it('should have ctrlName as PremioCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PremioCtrl');
  });
});
