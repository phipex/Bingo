/* global element, by */
'use strict';

function PersonaPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = PersonaPage;
