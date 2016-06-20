/* global describe, beforeEach, it, browser, expect */
'use strict';

var NuevoPagePo = require('./nuevo.po');

describe('Nuevo page', function () {
  var nuevoPage;

  beforeEach(function () {
    nuevoPage = new NuevoPagePo();
    browser.get('/#/nuevo');
  });

  it('should say NuevoCtrl', function () {
    expect(nuevoPage.heading.getText()).toEqual('nuevo');
    expect(nuevoPage.text.getText()).toEqual('NuevoCtrl');
  });
});
