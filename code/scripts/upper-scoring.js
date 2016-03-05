console.log("upper scoring js is loaded...");

// var scorecardPlayer1 = document.querySelector(".player1");
//
// var scorecardPlayer2 = document.querySelector(".player2");

var counter;
var currentDiceSorted;

var onesScore;
var twosScore;
var threesScore;
var foursScore;
var fivesScore;
var sixesScore;

function checkForScores() {
  currentDiceSorted = currentDice.sort();
  console.log("currentDice sorted",currentDiceSorted);

  updatingCountInObj(currentDiceSorted);

  checkOnes();
  checkTwos();
  checkThrees();
  checkFours();
  checkFives();
  checkSixes();

  checkChance(currentDiceSorted);
  checkFullHouse(currentDiceSorted);
  checkSmStraight(currentDiceSorted);
  checkLgStraight(currentDiceSorted);

  return currentDiceSorted;

}

function checkOnes() {

  var onesPlayer = document.querySelector(".player" + playerNumber + " .score-ones.scorecard-notclicked .scorecard-score");

  if (onesPlayer) {
    onesScore = (diceObj["die1"]["count"]) * 1;
    console.log("onesScore",onesScore);
    console.log("what is the player number?",playerNumber);
    onesPlayer.innerText = onesScore;
  }
}

function checkTwos() {

  var twosPlayer = document.querySelector(".player" + playerNumber + " .score-twos.scorecard-notclicked .scorecard-score");

  if (twosPlayer) {
    twosScore = (diceObj["die2"]["count"]) * 2;
    console.log("twosScore",twosScore);
    console.log("what is the player number?",playerNumber);
    twosPlayer.innerText = twosScore;
  }
}

function checkThrees() {

  var threesPlayer = document.querySelector(".player" + playerNumber + " .score-threes.scorecard-notclicked .scorecard-score");

  if (threesPlayer) {
    threesScore = (diceObj["die3"]["count"]) * 3;
    console.log("threesScore",threesScore);
    console.log("what is the player number?",playerNumber);
    threesPlayer.innerText = threesScore;
  }
}

function checkFours() {

  var foursPlayer = document.querySelector(".player" + playerNumber + " .score-fours.scorecard-notclicked .scorecard-score");

  if (foursPlayer) {
    foursScore = (diceObj["die4"]["count"]) * 4;
    console.log("foursScore",foursScore);
    console.log("what is the player number?",playerNumber);
    foursPlayer.innerText = foursScore;
  }
}

function checkFives() {

  var fivesPlayer = document.querySelector(".player" + playerNumber + " .score-fives.scorecard-notclicked .scorecard-score");

  if (fivesPlayer) {
    fivesScore = (diceObj["die5"]["count"]) * 5;
    console.log("fivesScore",fivesScore);
    console.log("what is the player number?",playerNumber);
    fivesPlayer.innerText = fivesScore;
  }
}

function checkSixes() {

  var sixesPlayer = document.querySelector(".player" + playerNumber + " .score-sixes.scorecard-notclicked .scorecard-score");

  if (sixesPlayer) {
    sixesScore = (diceObj["die6"]["count"]) * 6;
    console.log("sixesScore",sixesScore);
    console.log("what is the player number?",playerNumber);
    sixesPlayer.innerText = sixesScore;
  }
}
