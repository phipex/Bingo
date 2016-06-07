/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Sorteo', function () {
  var service;

  beforeEach(module('user'));

  beforeEach(inject(function (Sorteo) {
    service = Sorteo;
  }));

  it('should equal Sorteo', function () {
    expect(service.get()).toEqual('Sorteo');
  });
});
