"use strict";

function howOld() {
  let element = document.getElementById('old');
  element.innerHTML = moment().diff(moment('1994-05-07'), 'year');
}

var ctx = document.getElementById("scoreChart");
var scoreChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2005/10', '2016/08', '2017/10', '2018/01', '2018/04', '2018/06',
             '2018/07', '2018/10', '2018/10', '2018/11', '2019/04', '2019/05',
             '2019/06', '2019/07', '2019/08', '2019/08', '2019/09', '2019/10', ],
    datasets: [{
      label: '最高スコア',
      data: [122, 115, 108, 97, 94, 105, 112, 109, 110, 107, 97, 95, 105, 99, 100, 102,
              97, 99,],
      borderColor: "RGB(84,184,137)",
      backgroundColor: "RGB(181,181,173)"
    }],
  },
  options: {
    title: {
      display: true,
      text: 'スコア推移'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 130,
          suggestedMin: 60,
          stepSize: 10,
          callback: function(value, index, values) {
            return value
          }
        }
      }]
    },
  }
});

$(function () {
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});
