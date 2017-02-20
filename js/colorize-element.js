'use strict';

/* global utils:true */

window.colorize = (function () {
  var colorizeElement = function (el, cbck) {
    if (typeof cbck === 'function') {
      cbck();
    }
    utils.setAriaPressed(el);
  };

  return {
    setColorizedElementHandler: function (element, callback, cb) {
      element.addEventListener('click', function () {
        colorizeElement(element, callback);
        if (typeof cb === 'function') {
          cb();
        }
      });

      element.addEventListener('keydown', function (evt) {
        if (utils.isActivateEvent(evt)) {
          colorizeElement(element, callback);
          if (typeof cb === 'function') {
            cb();
          }
        }
      });
    }
  };
})();
