/* global describe, beforeEach, it, browser, expect */
'use strict';

var SorteoPagePo = require('./sorteo.po');

describe('Sorteo page', function () {
  var sorteoPage;

  beforeEach(function () {
    sorteoPage = new SorteoPagePo();
    browser.get('/#/sorteo');
  });

  it('should say SorteoCtrl', function () {
    expect(sorteoPage.heading.getText()).toEqual('sorteo');
    expect(sorteoPage.text.getText()).toEqual('SorteoCtrl');
  });
});
