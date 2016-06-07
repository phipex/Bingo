/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Recursos', function () {
  var service;

  beforeEach(module('user'));

  beforeEach(inject(function (Recursos) {
    service = Recursos;
  }));

  it('should equal Recursos', function () {
    expect(service.get()).toEqual('Recursos');
  });
});
