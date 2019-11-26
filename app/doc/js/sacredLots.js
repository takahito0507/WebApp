'use strict';

var btn = document.getElementById('btn');
btn.addEventListener("click", function () {
  var n = Math.random();

  if (n < 0.05) {
    btn.textContent = '大吉'; // 5%
  } else if (n < 0.25) {
    btn.textContent = '中吉'; // 20%
  } else if (n < 0.50) {
    btn.textContent = '吉'; // 25%
  } else if (n < 0.75) {
    btn.textContent = '小吉'; // 25%
  } else if (n < 0.95) {
    btn.textContent = '凶'; // 20%
  } else {
    btn.textContent = '大凶'; // 5%
  }
});