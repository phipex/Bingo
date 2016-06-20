/* global describe, beforeEach, it, browser, expect */
'use strict';

var FiguraPagePo = require('./figura.po');

describe('Figura page', function () {
  var figuraPage;

  beforeEach(function () {
    figuraPage = new FiguraPagePo();
    browser.get('/#/figura');
  });

  it('should say FiguraCtrl', function () {
    expect(figuraPage.heading.getText()).toEqual('figura');
    expect(figuraPage.text.getText()).toEqual('FiguraCtrl');
  });
});
