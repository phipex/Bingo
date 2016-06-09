/* global describe, beforeEach, it, browser, expect */
'use strict';

var AsignacionPagePo = require('./asignacion.po');

describe('Asignacion page', function () {
  var asignacionPage;

  beforeEach(function () {
    asignacionPage = new AsignacionPagePo();
    browser.get('/#/asignacion');
  });

  it('should say AsignacionCtrl', function () {
    expect(asignacionPage.heading.getText()).toEqual('asignacion');
    expect(asignacionPage.text.getText()).toEqual('AsignacionCtrl');
  });
});
