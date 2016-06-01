/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('events', function () {
  var constant;

  beforeEach(module('bingo'));

  beforeEach(inject(function (events) {
    constant = events;
  }));

  it('should equal 0', function () {
    expect(constant).toBe(0);
  });
});
