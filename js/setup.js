'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var chooseNumberOfColor = function (colorsLength) {
  return Math.round(Math.random() * (colorsLength - 1));
};

wizardCoat.addEventListener('click', function () {
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  this.style.fill = wizardCoatColors[chooseNumberOfColor(wizardCoatColors.length)];
});

wizardEyes.addEventListener('click', function () {
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  this.style.fill = wizardEyesColors[chooseNumberOfColor(wizardEyesColors.length)];
});

fireballWrap.addEventListener('click', function () {
  var fireballWrapColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  this.style.background = fireballWrapColors[chooseNumberOfColor(fireballWrapColors.length)];
});

