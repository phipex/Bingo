/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoPagosPagePo = require('./user-sorteo-pagos.po');

describe('User sorteo.pagos page', function () {
  var userSorteoPagosPage;

  beforeEach(function () {
    userSorteoPagosPage = new UserSorteoPagosPagePo();
    browser.get('/#/pagos');
  });

  it('should say UserSorteoPagosCtrl', function () {
    expect(userSorteoPagosPage.heading.getText()).toEqual('userSorteoPagos');
    expect(userSorteoPagosPage.text.getText()).toEqual('UserSorteoPagosCtrl');
  });
});
