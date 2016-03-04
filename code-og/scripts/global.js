console.log("global js loaded...");

var openingPage = document.querySelector(".opening-page");
var startButton = document.querySelector("button[name=start]");

var gamePage = document.querySelector(".game");

var playersTurn = document.querySelector(".player-number");

var rollButton = document.querySelector("button[name=roll]");
var rollNumber = document.querySelector(".roll-number");

var resultsPage = document.querySelector(".results-page");


var roll1 = document.querySelector(".roll-one .rolled-die-imgs");
var roll2 = document.querySelector(".roll-two .rolled-die-imgs");
var roll3 = document.querySelector(".roll-three .rolled-die-imgs");
var roll4 = document.querySelector(".roll-four .rolled-die-imgs");
var roll5 = document.querySelector(".roll-five .rolled-die-imgs");

var rollDieArray = [roll1,roll2,roll3,roll4,roll5];

var notClicked;

var diceObj = {
  die0: {
    img: "./imgs/die0.png",
    imgClass: "die0",
    dieValue: 0,
  },
  die1: {
    img: "./imgs/die1.png",
    imgClass: "die1",
    dieValue: 1,
  },
  die2: {
    img: "./imgs/die2.png",
    imgClass: "die2",
    dieValue: 2,
  },
  die3: {
    img: "./imgs/die3.png",
    imgClass: "die3",
    dieValue: 3,
  },
  die4: {
    img: "./imgs/die4.png",
    imgClass: "die4",
    dieValue: 4,
  },
  die5: {
    img: "./imgs/die5.png",
    imgClass: "die5",
    dieValue: 5,
  },
  die6: {
    img: "./imgs/die6.png",
    imgClass: "die6",
    dieValue: 6,
  },
};
