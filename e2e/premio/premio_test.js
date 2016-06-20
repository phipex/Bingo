/* global describe, beforeEach, it, browser, expect */
'use strict';

var PremioPagePo = require('./premio.po');

describe('Premio page', function () {
  var premioPage;

  beforeEach(function () {
    premioPage = new PremioPagePo();
    browser.get('/#/premio');
  });

  it('should say PremioCtrl', function () {
    expect(premioPage.heading.getText()).toEqual('premio');
    expect(premioPage.text.getText()).toEqual('PremioCtrl');
  });
});
