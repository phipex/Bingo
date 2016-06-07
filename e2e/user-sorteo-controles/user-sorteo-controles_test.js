/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoControlesPagePo = require('./user-sorteo-controles.po');

describe('User sorteo.controles page', function () {
  var userSorteoControlesPage;

  beforeEach(function () {
    userSorteoControlesPage = new UserSorteoControlesPagePo();
    browser.get('/#/controles');
  });

  it('should say UserSorteoControlesCtrl', function () {
    expect(userSorteoControlesPage.heading.getText()).toEqual('userSorteoControles');
    expect(userSorteoControlesPage.text.getText()).toEqual('UserSorteoControlesCtrl');
  });
});
