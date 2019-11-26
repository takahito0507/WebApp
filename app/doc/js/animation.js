"use strict"; // //ウィンドウの高さを取得する
// var window_h = $(window).height();
//
// //スクロールイベント
// $(window).on("scroll", function() {
//
//   //スクロールの位置を取得する
//   var scroll_top = $(window).scrollTop();
//
//   $(".anime").each(function() {
//     //各box要素のtopの位置を取得する
//     var elem_pos = $(this).offset().top;
//
//     //どのタイミングでフェードインさせるか
//     if (scroll_top &gt;= elem_pos - window_h + 300) {
//       $(this).addClass("fadein");　//特定の位置を超えたらクラスを追加
//     } else {
//       $(this).removeClass("fadein"); //そうでない場合はクラスを削除
//     }
//   });
// });