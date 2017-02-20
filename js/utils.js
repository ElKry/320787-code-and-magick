'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;


  var getRandomElement = function (arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  var setupKeydownHandler = function (setupElement, evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      setupElement.classList.add('invisible');
    }
  };

  var getRandomElementExcept = function (arr, arrElement) {
    var randomElement = null;
    while (!randomElement || randomElement === arrElement) {
      randomElement = getRandomElement(arr);
    }
    return randomElement;
  };

  return {
    getRandomElementExcept: getRandomElementExcept,

    setAriaPressed: function (elementFalse) {
      var elementsTrue = document.querySelectorAll('[aria-pressed="true"]');
      elementFalse.setAttribute('aria-pressed', 'true');
      for (var i = 0; i < elementsTrue.length; i++) {
        elementsTrue[i].setAttribute('aria-pressed', 'false');
      }
    },

    setColor: function (elementName, colorsName, propertyName) {
      var currentColor = elementName.style[propertyName];
      var randomColor = getRandomElementExcept(colorsName, currentColor);
      elementName.style[propertyName] = randomColor;
    },

    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    setupKeydownHandler: function (setupElementInvisible, evt) {
      if (evt.keyCode === ESCAPE_KEY_CODE) {
        setupElementInvisible.classList.add('invisible');
      }
    },

    showSetupElement: function (setupElementShow) {
      setupElementShow.classList.remove('invisible');
      document.addEventListener('keydown', function (evt) {
        setupKeydownHandler(setupElementShow, evt);
      });
    },

    hideSetupElement: function (setupElementHide, cb) {
      setupElementHide.classList.add('invisible');
      document.removeEventListener('keydown', function (evt) {
        setupKeydownHandler(setupElementHide, evt);
      });
      if (typeof cb === 'function') {
        cb();
      }
    }
  };
})();
