'use strict'; //[Generate Password]ボタン押したときの処理

function clickGenerateBtn() {
  var numbers = document.getElementById('numbers');
  var symbols = document.getElementById('symbols');
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    getPassword();
  });
} // //スライドして文字数を決める処理


function getSlideLength() {
  var slider = document.getElementById('slider');
  var label = document.getElementById('label');
  slider.addEventListener('change', function () {
    label.innerHTML = this.value;
  });
} //文字をクリックしたら選択状態にする処理


function getClickResult() {
  var result = document.getElementById('result');
  result.addEventListener('click', function () {
    this.select();
  });
} // ------private function-------------------------------------------------------
//Password生成処理


function getPassword() {
  var seedLetters = 'abcdefghijklmnopqrstuvwxyz';
  var seedNumbers = '0123456789';
  var seedSymbols = '!#$%&@?¥_';
  var seed;
  var len = slider.value;
  var pwd = '';
  seed = seedLetters + seedLetters.toUpperCase();

  if (numbers.checked) {
    seed += seedNumbers;
  }

  if (symbols.checked) {
    seed += seedSymbols;
  }

  for (var i = 0; i < len; i++) {
    pwd += seed[Math.floor(Math.random() * seed.length)];
  } //処理内容は同じ
  // while (len--){
  //   pwd += seed[Math.floor(Math.random() * seed.length)];
  // }


  result.value = pwd;
}