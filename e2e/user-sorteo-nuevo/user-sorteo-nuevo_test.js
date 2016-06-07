/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoNuevoPagePo = require('./user-sorteo-nuevo.po');

describe('User sorteo.nuevo page', function () {
  var userSorteoNuevoPage;

  beforeEach(function () {
    userSorteoNuevoPage = new UserSorteoNuevoPagePo();
    browser.get('/#/nuevo');
  });

  it('should say UserSorteoNuevoCtrl', function () {
    expect(userSorteoNuevoPage.heading.getText()).toEqual('userSorteoNuevo');
    expect(userSorteoNuevoPage.text.getText()).toEqual('UserSorteoNuevoCtrl');
  });
});
