"use strict"; //サンプルhoge クリック時に色が変わる

$(function () {
  $(".hoge").click(function () {
    $(this).css("background-color", "green");
  });
});

function currentTime() {
  document.getElementById('date').innerHTML = moment().format("YYYY-MM-DD HH:mm:ss");
} // サンプルhoge2 クリック時にtoggleで色が変わる


$(function () {
  $(".hoge2").on("click", function () {
    $(this).css("background-color", "green");
  });
});