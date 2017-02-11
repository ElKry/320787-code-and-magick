'use strict';

window.utils = {};

utils.ENTER_KEY_CODE = 13;

utils.getRandomElement = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

utils.setAriaPressed = function (elementFalse) {
  var elementsTrue = document.querySelectorAll('[aria-pressed="true"]');
  elementFalse.setAttribute('aria-pressed', 'true');
  for (var i = 0; i < elementsTrue.length; i++) {
    elementsTrue[i].setAttribute('aria-pressed', 'false');
  }
};

utils.getRandomElementExcept = function (arr, arrElement) {
  var randomElement = null;
  while (!randomElement || randomElement === arrElement) {
    randomElement = utils.getRandomElement(arr);
  }
  return randomElement;
};

utils.isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === utils.ENTER_KEY_CODE;
};

