'use strict';

var words = ['athens', 'vienna', 'jerusalem', 'geneva', 'naples', 'zurich', 'florence', 'prague', 'beijing', 'bern', 'munich', 'milan', 'moscow', 'warsaw'];
var word; //今何文字目か

var loc; //正解数

var score; //不正解数

var miss;
var timeLimit = 3 * 1000;
var startTime;
var isPlaying = false;
var target = document.getElementById('target');
var scoreLabel = document.getElementById('score');
var missLabel = document.getElementById('miss');
var timerLabel = document.getElementById('timer'); // windowをクリックした際の処理

window.addEventListener('click', function () {
  // タイマーがすでに走っていた場合
  if (isPlaying === true) {
    return;
  } // startしたら、タイマーを走らす


  isPlaying = true; // clickしたら初めからやり直す

  loc = 0;
  score = 0;
  miss = 0;
  scoreLabel.textContent = score;
  missLabel.textContent = miss;
  word = words[Math.floor(Math.random() * words.length)];
  target.textContent = word;
  startTime = Date.now();
  updatTimer();
}); // window上でキーボード入力した際の処理

window.addEventListener('keydown', function (e) {
  // タイマーがすでに走っていなかった場合、処理しない
  if (isPlaying !== true) {
    return;
  }

  if (e.key === word[loc]) {
    loc++;

    if (loc === word.length) {
      word = words[Math.floor(Math.random() * words.length)];
      loc = 0;
    }

    updateTarget();
    score++;
    scoreLabel.textContent = score;
  } else {
    miss++;
    missLabel.textContent = miss;
  }
}); // ------private function-----------------------------------------------------
// 単語を打てたら、”＿”で埋めていく

function updateTarget() {
  var placeHolder = '';

  for (var i = 0; i < loc; i++) {
    placeHolder += '_';
  }

  target.textContent = placeHolder + word.substring(loc);
} // 経過時間を表示する


function updatTimer() {
  var timeLeft = startTime + timeLimit - Date.now();
  timerLabel.textContent = (timeLeft / 1000).toFixed(2);
  var timeOutId = setTimeout(function () {
    updatTimer();
  }, 10); // 時間切れの処理

  if (timeLeft < 0) {
    isPlaying = false;
    clearTimeout(timeOutId); //timerを0.00の状態にする

    timerLabel.textContent = '0.00';
    setTimeout(function () {
      showResult();
    }, 100);
    target.textContent = 'click to replay';
  }
}

function showResult() {
  //  達成率を表示
  var accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  alert("".concat(score, "letters, ").concat(miss, "missed, ").concat(accuracy.toFixed(0), "% accuracy!"));
}