'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

  var getRandomItem = function (list) {
    return list[Math.floor(list.length * Math.random())];
  };

  window.createWizardsMocks = function (size) {
    var mocks = [];
    for (var i = 0; i < size; i++) {
      mocks[i] = {
        name: getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
        coatColor: getRandomItem(COAT_COLORS),
        eyesColor: getRandomItem(EYE_COLORS),
      };
    }

    return mocks;
  };
})();
