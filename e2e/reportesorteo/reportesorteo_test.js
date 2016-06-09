/* global describe, beforeEach, it, browser, expect */
'use strict';

var ReportesorteoPagePo = require('./reportesorteo.po');

describe('Reportesorteo page', function () {
  var reportesorteoPage;

  beforeEach(function () {
    reportesorteoPage = new ReportesorteoPagePo();
    browser.get('/#/reportesorteo');
  });

  it('should say ReportesorteoCtrl', function () {
    expect(reportesorteoPage.heading.getText()).toEqual('reportesorteo');
    expect(reportesorteoPage.text.getText()).toEqual('ReportesorteoCtrl');
  });
});
