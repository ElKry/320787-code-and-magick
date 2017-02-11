'use strict';

window.colorizeElement = function (element, colors, property) {
  var setColor = function (elementName, colorsName, propertyName) {
    var currentColor = elementName.style[propertyName];
    var randomColor = utils.getRandomElementExcept(colorsName, currentColor);
    elementName.style[propertyName] = randomColor;
  };

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
};
