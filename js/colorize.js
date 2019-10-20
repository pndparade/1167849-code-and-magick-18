'use strict';

(function () {
  var getRandomItem = function (list) {
    return list[Math.floor(list.length * Math.random())];
  };

  window.colorize = function (element, colorList) {
    element.addEventListener('click', function () {
      var color = getRandomItem(colorList);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
        element.querySelector('input').value = color;
      } else {
        element.style.fill = color;
      }
    });
  };

})();
