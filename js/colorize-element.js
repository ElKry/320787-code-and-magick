'use strict';

/* global utils:true */

window.colorize = (function () {
  var setColor = function (elementName, colorsName, propertyName) {
    var currentColor = elementName.style[propertyName];
    var randomColor = utils.getRandomElementExcept(colorsName, currentColor);
    elementName.style[propertyName] = randomColor;
  };

  return {
    colorizeElement: function (element, colors, property) {
      element.addEventListener('click', function () {
        setColor(element, colors, property);
        utils.setAriaPressed(element);
      });

      element.addEventListener('keydown', function (evt) {
        if (utils.isActivateEvent(evt)) {
          setColor(element, colors, property);
          utils.setAriaPressed(element);
        }
      });
    }
  };
})();
