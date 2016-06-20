/* global describe, beforeEach, it, browser, expect */
'use strict';

var AuditoriaPagePo = require('./auditoria.po');

describe('Auditoria page', function () {
  var auditoriaPage;

  beforeEach(function () {
    auditoriaPage = new AuditoriaPagePo();
    browser.get('/#/auditoria');
  });

  it('should say AuditoriaCtrl', function () {
    expect(auditoriaPage.heading.getText()).toEqual('auditoria');
    expect(auditoriaPage.text.getText()).toEqual('AuditoriaCtrl');
  });
});
