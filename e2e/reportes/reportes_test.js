/* global describe, beforeEach, it, browser, expect */
'use strict';

var ReportesPagePo = require('./reportes.po');

describe('Reportes page', function () {
  var reportesPage;

  beforeEach(function () {
    reportesPage = new ReportesPagePo();
    browser.get('/#/reportes');
  });

  it('should say ReportesCtrl', function () {
    expect(reportesPage.heading.getText()).toEqual('reportes');
    expect(reportesPage.text.getText()).toEqual('ReportesCtrl');
  });
});
