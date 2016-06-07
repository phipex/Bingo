/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoAdministrarPagePo = require('./user-sorteo-administrar.po');

describe('User sorteo.administrar page', function () {
  var userSorteoAdministrarPage;

  beforeEach(function () {
    userSorteoAdministrarPage = new UserSorteoAdministrarPagePo();
    browser.get('/#/administrar');
  });

  it('should say UserSorteoAdministrarCtrl', function () {
    expect(userSorteoAdministrarPage.heading.getText()).toEqual('userSorteoAdministrar');
    expect(userSorteoAdministrarPage.text.getText()).toEqual('UserSorteoAdministrarCtrl');
  });
});
