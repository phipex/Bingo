/* global describe, beforeEach, it, browser, expect */
'use strict';

var EditarPagePo = require('./editar.po');

describe('Editar page', function () {
  var editarPage;

  beforeEach(function () {
    editarPage = new EditarPagePo();
    browser.get('/#/editar');
  });

  it('should say EditarCtrl', function () {
    expect(editarPage.heading.getText()).toEqual('editar');
    expect(editarPage.text.getText()).toEqual('EditarCtrl');
  });
});
