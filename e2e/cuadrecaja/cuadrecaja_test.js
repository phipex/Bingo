/* global describe, beforeEach, it, browser, expect */
'use strict';

var CuadrecajaPagePo = require('./cuadrecaja.po');

describe('Cuadrecaja page', function () {
  var cuadrecajaPage;

  beforeEach(function () {
    cuadrecajaPage = new CuadrecajaPagePo();
    browser.get('/#/cuadrecaja');
  });

  it('should say CuadrecajaCtrl', function () {
    expect(cuadrecajaPage.heading.getText()).toEqual('cuadrecaja');
    expect(cuadrecajaPage.text.getText()).toEqual('CuadrecajaCtrl');
  });
});
