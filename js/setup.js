'use strict';

/* global utils:true */

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');

var ESCAPE_KEY_CODE = 27;

var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetupElement = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

setupOpen.addEventListener('click', function (evt) {
  showSetupElement();
  utils.setAriaPressed(evt.target);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (utils.isActivateEvent(evt)) {
    showSetupElement();
    utils.setAriaPressed(evt.target);
  }
});

setupClose.addEventListener('click', function (evt) {
  hideSetupElement();
  utils.setAriaPressed(evt.target);
});

setupClose.addEventListener('keydown', function (evt) {
  if (utils.isActivateEvent(evt)) {
    hideSetupElement();
    utils.setAriaPressed(evt.target);
  }
});

setupSubmit.addEventListener('click', function () {
  hideSetupElement();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (utils.isActivateEvent(evt)) {
    hideSetupElement();
  }
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');

var fireballWrapColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
window.colorizeElement(fireballWrap, fireballWrapColors, 'background');


