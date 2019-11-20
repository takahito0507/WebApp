  'use strict';

  let words = [
    'athens', 'vienna', 'jerusalem', 'geneva', 'naples',
    'zurich', 'florence', 'prague', 'beijing', 'bern',
    'munich', 'milan', 'moscow', 'warsaw',
  ];
  let word;
  //今何文字目か
  let loc;
  //正解数
  let score;
  //不正解数
  let miss;
  let timeLimit = 3 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  // windowをクリックした際の処理
  window.addEventListener('click', () => {
    // タイマーがすでに走っていた場合
    if (isPlaying === true) {
      return;
    }

    // startしたら、タイマーを走らす
    isPlaying = true;
    // clickしたら初めからやり直す
    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updatTimer();
  });

  // window上でキーボード入力した際の処理
  window.addEventListener('keydown', (e) => {
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
  });
  
  // ------private function-----------------------------------------------------
  // 単語を打てたら、”＿”で埋めていく
  function updateTarget() {
    let placeHolder = '';
    for (let i = 0; i < loc; i++) {
      placeHolder += '_';
    }
    target.textContent = placeHolder + word.substring(loc);
  }

  // 経過時間を表示する
  function updatTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    let timeOutId = setTimeout(() => {
      updatTimer()
    }, 10)

    // 時間切れの処理
    if (timeLeft < 0) {
      isPlaying = false;
      clearTimeout(timeOutId);
      //timerを0.00の状態にする
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        showResult();
      }, 100)

      target.textContent = 'click to replay';
    }
  }

  function showResult() {
    //  達成率を表示
    let accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score}letters, ${miss}missed, ${accuracy.toFixed(0)}% accuracy!`);
  }
