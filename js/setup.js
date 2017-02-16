'use strict';

/* global utils:true */

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');

  setupOpen.addEventListener('click', function (evt) {
    utils.showSetupElement(setup);
    utils.setAriaPressed(evt.target);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (utils.isActivateEvent(evt)) {
      utils.showSetupElement(setup);
      utils.setAriaPressed(evt.target);
    }
  });

  setupClose.addEventListener('click', function (evt) {
    utils.hideSetupElement(setup);
    utils.setAriaPressed(evt.target);
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (utils.isActivateEvent(evt)) {
      utils.hideSetupElement(setup, function () {
        setupOpen.querySelector('img').focus();
      });
      utils.setAriaPressed(evt.target);
    }
  });

  setupSubmit.addEventListener('click', function () {
    utils.hideSetupElement(setup);
  });

  setupSubmit.addEventListener('keydown', function (evt) {
    if (utils.isActivateEvent(evt)) {
      utils.hideSetupElement(setup);
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
  window.colorize.setColorizedElementHandler(wizardCoat, function () {
    utils.setColor(wizardCoat, wizardCoatColors, 'fill');
  });

  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  window.colorize.setColorizedElementHandler(wizardEyes, function () {
    utils.setColor(wizardEyes, wizardEyesColors, 'fill');
  });

  var fireballWrapColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  window.colorize.setColorizedElementHandler(fireballWrap, function () {
    utils.setColor(fireballWrap, fireballWrapColors, 'background');
  });
})();


