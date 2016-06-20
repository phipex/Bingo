/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ArchivoaudioCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivoaudio'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ArchivoaudioCtrl');
  }));

  it('should have ctrlName as ArchivoaudioCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ArchivoaudioCtrl');
  });
});
