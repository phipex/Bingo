/* global describe, beforeEach, it, browser, expect */
'use strict';

var AudioPagePo = require('./audio.po');

describe('Audio page', function () {
  var audioPage;

  beforeEach(function () {
    audioPage = new AudioPagePo();
    browser.get('/#/audio');
  });

  it('should say AudioCtrl', function () {
    expect(audioPage.heading.getText()).toEqual('audio');
    expect(audioPage.text.getText()).toEqual('AudioCtrl');
  });
});
