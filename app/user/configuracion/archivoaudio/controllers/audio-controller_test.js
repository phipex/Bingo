/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AudioCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivoaudio'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AudioCtrl');
  }));

  it('should have ctrlName as AudioCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AudioCtrl');
  });
});
