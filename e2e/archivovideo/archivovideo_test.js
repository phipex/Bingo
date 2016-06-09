/* global describe, beforeEach, it, browser, expect */
'use strict';

var ArchivovideoPagePo = require('./archivovideo.po');

describe('Archivovideo page', function () {
  var archivovideoPage;

  beforeEach(function () {
    archivovideoPage = new ArchivovideoPagePo();
    browser.get('/#/archivovideo');
  });

  it('should say ArchivovideoCtrl', function () {
    expect(archivovideoPage.heading.getText()).toEqual('archivovideo');
    expect(archivovideoPage.text.getText()).toEqual('ArchivovideoCtrl');
  });
});
