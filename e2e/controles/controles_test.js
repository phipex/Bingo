/* global describe, beforeEach, it, browser, expect */
'use strict';

var ControlesPagePo = require('./controles.po');

describe('Controles page', function () {
  var controlesPage;

  beforeEach(function () {
    controlesPage = new ControlesPagePo();
    browser.get('/#/controles');
  });

  it('should say ControlesCtrl', function () {
    expect(controlesPage.heading.getText()).toEqual('controles');
    expect(controlesPage.text.getText()).toEqual('ControlesCtrl');
  });
});
