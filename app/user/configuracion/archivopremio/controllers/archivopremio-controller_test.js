/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ArchivopremioCtrl', function () {
  var ctrl;

  beforeEach(module('configuracion.archivopremio'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ArchivopremioCtrl');
  }));

  it('should have ctrlName as ArchivopremioCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ArchivopremioCtrl');
  });
});
