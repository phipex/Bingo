/* global describe, beforeEach, it, browser, expect */
'use strict';

var ConfiguracionPagePo = require('./configuracion.po');

describe('Configuracion page', function () {
  var configuracionPage;

  beforeEach(function () {
    configuracionPage = new ConfiguracionPagePo();
    browser.get('/#/configuracion');
  });

  it('should say ConfiguracionCtrl', function () {
    expect(configuracionPage.heading.getText()).toEqual('configuracion');
    expect(configuracionPage.text.getText()).toEqual('ConfiguracionCtrl');
  });
});
