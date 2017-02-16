'use strict';

/* global utils:true */

window.colorize = (function () {
  var colorizeElement = function (el, cb) {
    if (typeof cb === 'function') {
      cb();
    }
    utils.setAriaPressed(el);
  };

  return {
    setColorizedElementHandler: function (element, callback) {
      element.addEventListener('click', function () {
        colorizeElement(element, callback);
      });

      element.addEventListener('keydown', function (evt) {
        if (utils.isActivateEvent(evt)) {
          colorizeElement(element, callback);
        }
      });
    }
  };
})();
