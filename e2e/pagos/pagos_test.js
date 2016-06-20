/* global describe, beforeEach, it, browser, expect */
'use strict';

var PagosPagePo = require('./pagos.po');

describe('Pagos page', function () {
  var pagosPage;

  beforeEach(function () {
    pagosPage = new PagosPagePo();
    browser.get('/#/pagos');
  });

  it('should say PagosCtrl', function () {
    expect(pagosPage.heading.getText()).toEqual('pagos');
    expect(pagosPage.text.getText()).toEqual('PagosCtrl');
  });
});
