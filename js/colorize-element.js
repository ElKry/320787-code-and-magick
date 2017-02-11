window.colorizeElement = function (element, colors, property) {
  var setColor = function (element, colors, property) {
    var currentColor = element.style[property];
    var randomColor = utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = randomColor;
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
}
