/*global utils*/
'use strict';

window.utils = {
  ENTER_KEY_CODE: 13,

  getRandomElement: function (arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  },

  setAriaPressed: function (elementFalse) {
    var elementsTrue = document.querySelectorAll('[aria-pressed="true"]');
    elementFalse.setAttribute('aria-pressed', 'true');
    for (var i = 0; i < elementsTrue.length; i++) {
      elementsTrue[i].setAttribute('aria-pressed', 'false');
    }
  },

  getRandomElementExcept: function (arr, arrElement) {
    var randomElement = null;
    while (!randomElement || randomElement === arrElement) {
      randomElement = utils.getRandomElement(arr);
    }
    return randomElement;
  },

  isActivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === utils.ENTER_KEY_CODE;
  }
};
