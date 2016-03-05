console.log("global js loaded...");

var clickEvent = document.addEventListener("click",function(event){
  console.log(event);
})

var openingPage = document.querySelector(".opening-page");
var startButton = document.querySelector("button[name=start]");

var gamePage = document.querySelector(".game");

var playersTurn = document.querySelector(".player-number");

var endGame = document.querySelector(".end-game");

var rollButton = document.querySelector("button[name=roll]");
var rollNumber = document.querySelector(".roll-number");

var resultsPage = document.querySelector(".results-page");
var playAgain = document.querySelector("button[name=play-again]");

var roll1 = document.querySelector(".roll-one .rolled-die-imgs");
var roll2 = document.querySelector(".roll-two .rolled-die-imgs");
var roll3 = document.querySelector(".roll-three .rolled-die-imgs");
var roll4 = document.querySelector(".roll-four .rolled-die-imgs");
var roll5 = document.querySelector(".roll-five .rolled-die-imgs");

var rollDieArray = [roll1,roll2,roll3,roll4,roll5];

var scoreDieArrayP1 = document.querySelectorAll(".player1 .score-item");
var scoreDieArrayP2 = document.querySelectorAll(".player2 .score-item");


var diceObj = {
  die1: {
    img: "./imgs/die1.png",
    dieValue: 1,
  },
  die2: {
    img: "./imgs/die2.png",
    dieValue: 2,
  },
  die3: {
    img: "./imgs/die3.png",
    dieValue: 3,
  },
  die4: {
    img: "./imgs/die4.png",
    dieValue: 4,
  },
  die5: {
    img: "./imgs/die5.png",
    dieValue: 5,
  },
  die6: {
    img: "./imgs/die6.png",
    dieValue: 6,
  },
};
