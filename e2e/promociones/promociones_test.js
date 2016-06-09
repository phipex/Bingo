/* global describe, beforeEach, it, browser, expect */
'use strict';

var PromocionesPagePo = require('./promociones.po');

describe('Promociones page', function () {
  var promocionesPage;

  beforeEach(function () {
    promocionesPage = new PromocionesPagePo();
    browser.get('/#/promociones');
  });

  it('should say PromocionesCtrl', function () {
    expect(promocionesPage.heading.getText()).toEqual('promociones');
    expect(promocionesPage.text.getText()).toEqual('PromocionesCtrl');
  });
});
