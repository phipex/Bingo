/* global describe, beforeEach, it, browser, expect */
'use strict';

var VentasPagePo = require('./ventas.po');

describe('Ventas page', function () {
  var ventasPage;

  beforeEach(function () {
    ventasPage = new VentasPagePo();
    browser.get('/#/ventas');
  });

  it('should say VentasCtrl', function () {
    expect(ventasPage.heading.getText()).toEqual('ventas');
    expect(ventasPage.text.getText()).toEqual('VentasCtrl');
  });
});
