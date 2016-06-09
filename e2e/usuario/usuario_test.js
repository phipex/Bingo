/* global describe, beforeEach, it, browser, expect */
'use strict';

var UsuarioPagePo = require('./usuario.po');

describe('Usuario page', function () {
  var usuarioPage;

  beforeEach(function () {
    usuarioPage = new UsuarioPagePo();
    browser.get('/#/usuario');
  });

  it('should say UsuarioCtrl', function () {
    expect(usuarioPage.heading.getText()).toEqual('usuario');
    expect(usuarioPage.text.getText()).toEqual('UsuarioCtrl');
  });
});
