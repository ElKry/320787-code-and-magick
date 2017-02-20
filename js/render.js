'use strict';

/* global utils:true */

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard');
  var setupSimilar = document.querySelector('.setup-similar');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var WizardElCoat = wizardElement.querySelector('#wizard-coat');
    var wizardElEyes = wizardElement.querySelector('#wizard-eyes');

    wizardElement.style.width = 50;
    wizardElement.style.height = 50;

    WizardElCoat.removeAttribute('id');
    WizardElCoat.classList.add('wizard-coat');
    WizardElCoat.style.fill = wizard.colorCoat;

    wizardElEyes.removeAttribute('id');
    wizardElEyes.classList.add('wizard-eyes');
    wizardElEyes.style.fill = wizard.colorEyes;

    wizardElement.setAttribute('title', wizard.name);

    return wizardElement;
  };

  return function (wizards) {
    setupSimilar.innerHTML = '';
    for (var i = 0; i < 5; i++) {
      setupSimilar.appendChild(renderWizard(utils.getRandomElementExcept(wizards, wizards[i + 1])));
    }
  };
})();
