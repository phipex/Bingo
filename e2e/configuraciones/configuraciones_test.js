/* global describe, beforeEach, it, browser, expect */
'use strict';

var ConfiguracionesPagePo = require('./configuraciones.po');

describe('Configuraciones page', function () {
  var configuracionesPage;

  beforeEach(function () {
    configuracionesPage = new ConfiguracionesPagePo();
    browser.get('/#/configuraciones');
  });

  it('should say ConfiguracionesCtrl', function () {
    expect(configuracionesPage.heading.getText()).toEqual('configuraciones');
    expect(configuracionesPage.text.getText()).toEqual('ConfiguracionesCtrl');
  });
});
