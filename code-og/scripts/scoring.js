console.log("scoring js is loaded...");

var scorecardPlayer1 = document.querySelector(".player1");

var scorecardPlayer2 = document.querySelector(".player2");

var onesPlayer1 = document.querySelector(".player1 .score-ones .scorecard-score");

var onesArray;
var onesScore;

function checkForScore() {
  console.log("checking for score...");
  for (var i = 0; i < rollDieArray.length; i++){
    onesArray = document.querySelectorAll(".die1");
    console.log("onesArray length", onesArray.length);
    onesScore = onesArray.length * 1;
    onesPlayer1.innerText = onesScore;
  }
}
