console.log("global js loaded...");


var openingPage = document.querySelector(".opening-page");
var startButton = document.querySelector("button[name=start]");
var instructionsButton = document.querySelector(".info span");

var instructionsPage = document.querySelector(".instructions")
var xBtn = document.querySelector(".exit span");

instructionsButton.addEventListener("click",function(){
  instructionsPage.classList.remove("hidden");
  openingPage.classList.add("hidden");
})

xBtn.addEventListener("click",function(){
  instructionsPage.classList.add("hidden");
  openingPage.classList.remove("hidden");
})

var gamePage = document.querySelector(".game");

var playersTurn = document.querySelector(".player-number");

var endGame = document.querySelector(".end-game span");

var rollButton = document.querySelector("button[name=roll]");
var rollNumber = document.querySelector(".roll-number");

var resultsPage = document.querySelector(".results-page");
var winnerMessage = document.querySelector(".winner-message");
var playAgainBtn = document.querySelector("button[name=play-again]");

var roll1 = document.querySelector(".roll-one .rolled-die-imgs");
var roll2 = document.querySelector(".roll-two .rolled-die-imgs");
var roll3 = document.querySelector(".roll-three .rolled-die-imgs");
var roll4 = document.querySelector(".roll-four .rolled-die-imgs");
var roll5 = document.querySelector(".roll-five .rolled-die-imgs");

var rollDieArray = [roll1,roll2,roll3,roll4,roll5];

var scoreItemP1 = document.querySelectorAll(".player1 .score-item");
var scoreItemP2 = document.querySelectorAll(".player2 .score-item");

var scorecardScore = document.querySelectorAll(".scorecard-score");

var scoreDieArrayP1 = document.querySelectorAll(".player1 .scorecard-notclicked");
var scoreDieArrayP2 = document.querySelectorAll(".player2 .scorecard-notclicked");


var diceObj = {
  die1: {
    img: "./imgs/die1.png",
    dieValue: 1,
    count: 0,
  },
  die2: {
    img: "./imgs/die2.png",
    dieValue: 2,
    count: 0,
  },
  die3: {
    img: "./imgs/die3.png",
    dieValue: 3,
    count: 0,
  },
  die4: {
    img: "./imgs/die4.png",
    dieValue: 4,
    count: 0,
  },
  die5: {
    img: "./imgs/die5.png",
    dieValue: 5,
    count: 0,
  },
  die6: {
    img: "./imgs/die6.png",
    dieValue: 6,
    count: 0,
  },
};
