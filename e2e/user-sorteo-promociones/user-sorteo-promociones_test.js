/* global describe, beforeEach, it, browser, expect */
'use strict';

var UserSorteoPromocionesPagePo = require('./user-sorteo-promociones.po');

describe('User sorteo.promociones page', function () {
  var userSorteoPromocionesPage;

  beforeEach(function () {
    userSorteoPromocionesPage = new UserSorteoPromocionesPagePo();
    browser.get('/#/promociones');
  });

  it('should say UserSorteoPromocionesCtrl', function () {
    expect(userSorteoPromocionesPage.heading.getText()).toEqual('userSorteoPromociones');
    expect(userSorteoPromocionesPage.text.getText()).toEqual('UserSorteoPromocionesCtrl');
  });
});
