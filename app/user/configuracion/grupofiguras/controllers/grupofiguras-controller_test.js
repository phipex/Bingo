/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GrupofigurasCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.grupofiguras'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GrupofigurasCtrl');
  }));

  it('should have ctrlName as GrupofigurasCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GrupofigurasCtrl');
  });
});
