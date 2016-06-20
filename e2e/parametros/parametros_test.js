/* global describe, beforeEach, it, browser, expect */
'use strict';

var ParametrosPagePo = require('./parametros.po');

describe('Parametros page', function () {
  var parametrosPage;

  beforeEach(function () {
    parametrosPage = new ParametrosPagePo();
    browser.get('/#/parametros');
  });

  it('should say ParametrosCtrl', function () {
    expect(parametrosPage.heading.getText()).toEqual('parametros');
    expect(parametrosPage.text.getText()).toEqual('ParametrosCtrl');
  });
});
