/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Authentification', function () {
  var service;

  beforeEach(module('bingo'));

  beforeEach(inject(function (Authentification) {
    service = Authentification;
  }));

  it('should equal Authentification', function () {
    expect(service.get()).toEqual('Authentification');
  });
});
