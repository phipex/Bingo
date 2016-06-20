/* global describe, beforeEach, it, browser, expect */
'use strict';

var VenderPagePo = require('./vender.po');

describe('Vender page', function () {
  var venderPage;

  beforeEach(function () {
    venderPage = new VenderPagePo();
    browser.get('/#/vender');
  });

  it('should say VenderCtrl', function () {
    expect(venderPage.heading.getText()).toEqual('vender');
    expect(venderPage.text.getText()).toEqual('VenderCtrl');
  });
});
