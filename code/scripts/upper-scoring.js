console.log("upper scoring js is loaded...");

var scorecardPlayer1 = document.querySelector(".player1");

var scorecardPlayer2 = document.querySelector(".player2");

var onesP1 = document.querySelector(".player1 .score-ones .scorecard-score");
var onesP2 = document.querySelector(".player2 .score-ones .scorecard-score");

var twosP1 = document.querySelector(".player1 .score-twos .scorecard-score");
var twosP2 = document.querySelector(".player2 .score-twos .scorecard-score");

var threesP1 = document.querySelector(".player1 .score-threes .scorecard-score");
var threesP2 = document.querySelector(".player2 .score-threes .scorecard-score");

var foursP1 = document.querySelector(".player1 .score-fours .scorecard-score");
var foursP2 = document.querySelector(".player2 .score-fours .scorecard-score");

var fivesP1 = document.querySelector(".player1 .score-fives .scorecard-score");
var fivesP2 = document.querySelector(".player2 .score-fives .scorecard-score");

var sixesP1 = document.querySelector(".player1 .score-sixes .scorecard-score");
var sixesP2 = document.querySelector(".player2 .score-sixes .scorecard-score");

var counter;
var currentDiceSorted;

var onesScore;
var twosScore;
var threesScore;
var foursScore;
var fivesScore;
var sixesScore;

function checkForScores() {
  checkOnes();
  checkTwos();
  checkThrees();
  checkFours();
  checkFives();
  checkSixes();


  currentDiceSorted = currentDice.sort();
  console.log("currentDice sorted",currentDiceSorted);

  // check3Kind(currentDiceSorted);
  // check4Kind(currentDiceSorted);
  // checkYahtzee(currentDiceSorted)

  checkForMatch(currentDiceSorted);

  return currentDiceSorted;

}

function checkOnes() {
  counter = 0;
    if (currentDice.indexOf(1) > -1) {
      counter += 1;
      console.log("counter",counter);
    }
  onesScore = parseInt(counter) * 1;
  console.log("onesScore",onesScore);
  console.log("what is the player number?",playerNumber);
  if (playerNumber === 1) {
    onesP1.innerText = onesScore;
    onesP2.innerText = "";
  } else if (playerNumber === 2){
    onesP1.innerText = "",
    onesP2.innerText = onesScore;
  }
}


// function checkOnes() {
//   counter = 0;
//   for (var i = 0; i < currentDice.length; i++) {
//     if(currentDice[i] === 1){
//       counter += 1;
//       console.log("counter",counter);
//     }
//   }
//   onesScore = parseInt(counter) * 1;
//   console.log("onesScore",onesScore);
//   console.log("what is the player number?",playerNumber);
//   if (playerNumber === 1) {
//     onesP1.innerText = onesScore;
//     onesP2.innerText = "";
//   } else if (playerNumber === 2){
//     onesP1.innerText = "",
//     onesP2.innerText = onesScore;
//   }
// }

function checkTwos() {
  counter = 0;
  for (var i = 0; i < currentDice.length; i++) {
    if(currentDice[i] === 2){
      counter += 1;
    }
  }
  twosScore = parseInt(counter) * 2;
  if (playerNumber === 1) {
    twosP1.innerText = twosScore;
    twosP2.innerText = "";
  } else if (playerNumber === 2){
    twosP1.innerText = "",
    twosP2.innerText = twosScore;
  }
}

function checkThrees() {
  counter = 0;
  for (var i = 0; i < currentDice.length; i++) {
    if(currentDice[i] === 3){
      counter += 1;
    }
  }
  threesScore = parseInt(counter) * 3;
  if (playerNumber === 1) {
    threesP1.innerText = threesScore;
    threesP2.innerText = "";
  } else if (playerNumber === 2){
    threesP1.innerText = "",
    threesP2.innerText = threesScore;
  }
}

function checkFours() {
  counter = 0;
  for (var i = 0; i < currentDice.length; i++) {
    if(currentDice[i] === 4){
      counter += 1;
    }
  }
  foursScore = parseInt(counter) * 4;
  if (playerNumber === 1) {
    foursP1.innerText = foursScore;
    foursP2.innerText = "";
  } else if (playerNumber === 2){
    foursP1.innerText = "",
    foursP2.innerText = foursScore;
  }
}

function checkFives() {
  counter = 0;
  for (var i = 0; i < currentDice.length; i++) {
    if(currentDice[i] === 5){
      counter += 1;
    }
  }
  fivesScore = parseInt(counter) * 5;
  if (playerNumber === 1) {
    fivesP1.innerText = fivesScore;
    fivesP2.innerText = "";
  } else if (playerNumber === 2){
    fivesP1.innerText = "",
    fivesP2.innerText = fivesScore;
  }
}

function checkSixes() {
  counter = 0;
  for (var i = 0; i < currentDice.length; i++) {
    if(currentDice[i] === 6){
      counter += 1;
    }
  }
  sixesScore = parseInt(counter) * 6;
  if (playerNumber === 1) {
    sixesP1.innerText = sixesScore;
    sixesP2.innerText = "";
  } else if (playerNumber === 2){
    sixesP1.innerText = "",
    sixesP2.innerText = sixesScore;
  }
}
