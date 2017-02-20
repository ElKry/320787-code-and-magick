'use strict';

/* global utils:true */

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupSimilar = setup.querySelector('.setup-similar');
  var loadWizards = function () {
    window.load('https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data', function (data) {
      window.render(data);
    }, function (err) {
      setupSimilar.innerHTML = err;
    });
  };

  setupOpen.addEventListener('click', function (evt) {
    utils.showSetupElement(setup);
    loadWizards();
    utils.setAriaPressed(evt.target);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (utils.isActivateEvent(evt)) {
      utils.showSetupElement(setup);
      loadWizards();
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
  }, function () {
    window.setTimeout(loadWizards, 5000);
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
  }, function () {
    window.setTimeout(loadWizards, 5000);
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


