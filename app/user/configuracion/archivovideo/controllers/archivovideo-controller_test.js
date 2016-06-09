/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ArchivovideoCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivovideo'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ArchivovideoCtrl');
  }));

  it('should have ctrlName as ArchivovideoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ArchivovideoCtrl');
  });
});
