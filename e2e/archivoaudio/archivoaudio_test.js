/* global describe, beforeEach, it, browser, expect */
'use strict';

var ArchivoaudioPagePo = require('./archivoaudio.po');

describe('Archivoaudio page', function () {
  var archivoaudioPage;

  beforeEach(function () {
    archivoaudioPage = new ArchivoaudioPagePo();
    browser.get('/#/archivoaudio');
  });

  it('should say ArchivoaudioCtrl', function () {
    expect(archivoaudioPage.heading.getText()).toEqual('archivoaudio');
    expect(archivoaudioPage.text.getText()).toEqual('ArchivoaudioCtrl');
  });
});
