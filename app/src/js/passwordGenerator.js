  'use strict';

  //[Generate Password]ボタン押したときの処理
  function clickGenerateBtn() {
    let numbers = document.getElementById('numbers');
    let symbols = document.getElementById('symbols');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
      getPassword();
    });
  }

  // //スライドして文字数を決める処理
  function getSlideLength() {
    let slider = document.getElementById('slider');
    let label = document.getElementById('label');
    slider.addEventListener('change', function() {
      label.innerHTML = this.value;
    });
  }

  //文字をクリックしたら選択状態にする処理
  function getClickResult() {
    let result = document.getElementById('result');
    result.addEventListener('click', function() {
      this.select();
    });
  }

  // ------private function-------------------------------------------------------
  //Password生成処理
  function getPassword() {
    let seedLetters = 'abcdefghijklmnopqrstuvwxyz';
    let seedNumbers = '0123456789';
    let seedSymbols = '!#$%&@?¥_';
    let seed;

    let len = slider.value;
    let pwd = '';

    seed = seedLetters + seedLetters.toUpperCase();
    if (numbers.checked) {
      seed += seedNumbers;
    }

    if (symbols.checked) {
      seed += seedSymbols;
    }

    for (let i = 0; i < len; i++) {
      pwd += seed[Math.floor(Math.random() * seed.length)];
    }
    //処理内容は同じ
    // while (len--){
    //   pwd += seed[Math.floor(Math.random() * seed.length)];
    // }
    result.value = pwd;
  }
