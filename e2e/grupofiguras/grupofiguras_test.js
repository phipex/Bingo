/* global describe, beforeEach, it, browser, expect */
'use strict';

var GrupofigurasPagePo = require('./grupofiguras.po');

describe('Grupofiguras page', function () {
  var grupofigurasPage;

  beforeEach(function () {
    grupofigurasPage = new GrupofigurasPagePo();
    browser.get('/#/grupofiguras');
  });

  it('should say GrupofigurasCtrl', function () {
    expect(grupofigurasPage.heading.getText()).toEqual('grupofiguras');
    expect(grupofigurasPage.text.getText()).toEqual('GrupofigurasCtrl');
  });
});
