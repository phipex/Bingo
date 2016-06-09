/* global describe, beforeEach, it, browser, expect */
'use strict';

var PersonaPagePo = require('./persona.po');

describe('Persona page', function () {
  var personaPage;

  beforeEach(function () {
    personaPage = new PersonaPagePo();
    browser.get('/#/persona');
  });

  it('should say PersonaCtrl', function () {
    expect(personaPage.heading.getText()).toEqual('persona');
    expect(personaPage.text.getText()).toEqual('PersonaCtrl');
  });
});
