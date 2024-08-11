
var timer = 30;
var score = 0;
var rando;

function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 96; i++) {
    var ran = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${ran}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}
function RunTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
function GetNewhit() {
   rando = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rando;
}
function IncreaseScore() {
  score += 10;
  document.querySelector("#scorecount").textContent = score;
}
document.querySelector("#pbottom").addEventListener(
  "click",
  function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === rando) {
      IncreaseScore();
      makebubble();
      GetNewhit();
    }
  },
  1000
);
makebubble();
RunTimer();
GetNewhit();
IncreaseScore();
