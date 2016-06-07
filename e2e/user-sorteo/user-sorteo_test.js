/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoPagePo = require('./user-sorteo.po');

describe('User sorteo page', function () {
  var userSorteoPage;

  beforeEach(function () {
    userSorteoPage = new UserSorteoPagePo();
    browser.get('/#/sorteo');
  });

  it('should say UserSorteoCtrl', function () {
    expect(userSorteoPage.heading.getText()).toEqual('userSorteo');
    expect(userSorteoPage.text.getText()).toEqual('UserSorteoCtrl');
  });
});
