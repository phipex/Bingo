/* global describe, beforeEach, it, browser, expect */
'use strict';

var ArchivopremioPagePo = require('./archivopremio.po');

describe('Archivopremio page', function () {
  var archivopremioPage;

  beforeEach(function () {
    archivopremioPage = new ArchivopremioPagePo();
    browser.get('/#/archivopremio');
  });

  it('should say ArchivopremioCtrl', function () {
    expect(archivopremioPage.heading.getText()).toEqual('archivopremio');
    expect(archivopremioPage.text.getText()).toEqual('ArchivopremioCtrl');
  });
});
