'use strict';

{
  var countUp = function countUp() {
    var d = new Date(Date.now() - startTime + elapsedTime);
    var m = String(d.getMinutes()).padStart(2, '0');
    var s = String(d.getSeconds()).padStart(2, '0');
    var ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = "".concat(m, ":").concat(s, ".").concat(ms);
    timeoutId = setTimeout(function () {
      countUp();
    }, 10);
  };

  var setButtonStateInitial = function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  };

  var setButtonStateRunning = function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  };

  var setButtonStateStopped = function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  };

  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  var startTime;
  var timeoutId;
  var elapsedTime = 0;
  setButtonStateInitial();
  start.addEventListener('click', function () {
    if (start.classList.contains('inactive') === true) {
      return;
    }

    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });
  stop.addEventListener('click', function () {
    if (stop.classList.contains('inactive') === true) {
      return;
    }

    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });
  reset.addEventListener('click', function () {
    if (reset.classList.contains('inactive') === true) {
      return;
    }

    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}