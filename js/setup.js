'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

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

var setAriaPressed = function (elementTrue, elementFalse) {
  elementTrue.setAttribute('aria-pressed', 'true');
  elementFalse.setAttribute('aria-pressed', 'false');
};

setupOpen.addEventListener('click', function (evt) {
  showSetupElement();
  setAriaPressed(evt.target, setupClose);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetupElement();
    setAriaPressed(evt.target, setupClose);
  }
});

setupClose.addEventListener('click', function (evt) {
  hideSetupElement();
  setAriaPressed(evt.target, setupOpen.querySelector('img'));
});

setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
    setAriaPressed(evt.target, setupOpen.querySelector('img'));
  }
});

setupSubmit.addEventListener('click', function () {
  hideSetupElement();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
  }
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var chooseNumberOfColor = function (colorsLength) {
  return Math.round(Math.random() * (colorsLength - 1));
};

wizardCoat.addEventListener('click', function () {
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  wizardCoat.style.fill = wizardCoatColors[chooseNumberOfColor(wizardCoatColors.length)];
});

wizardEyes.addEventListener('click', function () {
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  wizardEyes.style.fill = wizardEyesColors[chooseNumberOfColor(wizardEyesColors.length)];
});

fireballWrap.addEventListener('click', function () {
  var fireballWrapColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  fireballWrap.style.background = fireballWrapColors[chooseNumberOfColor(fireballWrapColors.length)];
});

