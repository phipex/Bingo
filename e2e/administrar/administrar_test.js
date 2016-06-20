/* global describe, beforeEach, it, browser, expect */
'use strict';

var AdministrarPagePo = require('./administrar.po');

describe('Administrar page', function () {
  var administrarPage;

  beforeEach(function () {
    administrarPage = new AdministrarPagePo();
    browser.get('/#/administrar');
  });

  it('should say AdministrarCtrl', function () {
    expect(administrarPage.heading.getText()).toEqual('administrar');
    expect(administrarPage.text.getText()).toEqual('AdministrarCtrl');
  });
});
