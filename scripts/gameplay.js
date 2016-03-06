console.log("gameplay js is loaded...");

var count = 0;
var rollsLeft = 3;
var playerNumber = 1;
var notClicked;

var currentDice;

var checkMatchArray;

var p1GrandTotal;
var p2GrandTotal
var grandTotal;


startButton.addEventListener("click", function(){
  count += 1;
  rollsLeft -= 1;
  console.log("count",count);
  startGame();
});


function startGame(){
  console.log("the game has started...");

  grandTotal = 0;

  var grandTotalEl1 = document.querySelector(".player1 .grand-total .total-dynamic");
  var grandTotalEl2 = document.querySelector(".player2 .grand-total .total-dynamic");
  console.log("els", grandTotalEl1, grandTotalEl2);

  grandTotalEl1.innerText = grandTotal;
  grandTotalEl2.innerText = grandTotal;

  playerNumber = 1;
  playersTurn.innerText = playerNumber;
  console.log("the player number is", playerNumber)

  openingPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  resultsPage.classList.add("hidden");

  // rollDice();
  console.log("diceObj before shuffle", diceObj, "and currentDice before rollShuffle", currentDice);
  rollShuffle();

  rollButton.addEventListener("click", function(){
    for (var die in diceObj) {
      diceObj[die]["count"] = 0;
    }
    console.log("diceObj counts should be set back to zero", diceObj);

    if (count >= 3) {
      nextPlayer();
    }

    if (count < 3){
      count += 1;
      rollsLeft -= 1;
      console.log("diceObj before shuffle", diceObj, "and currentDice before rollShuffle", currentDice);
      rollShuffle();
      // rollDice();
    }

    console.log("rollBtn clicked");
    console.log("count should increase when rollBtn clicked",count);
  });

  endGame.addEventListener("click", gameOver);

  clickDiceInit();
  scorecardClickInit();
}

function clickDiceInit(){
  for (var i  = 0; i < rollDieArray.length; i++){
    rollDieArray[i].addEventListener("click", function() {
      console.log("this in clickDiceInit",this);
      this.classList.toggle("clicked");
      this.classList.toggle("notclicked");
    });
  }
}

function rollDice() {
  console.log("dice have been rolled...");
  notClicked = document.querySelectorAll(".notclicked");
  console.log(".notClicked",notClicked);

  clicked = document.querySelectorAll(".clicked");
  console.log(".clicked",clicked);

  currentDice = [];

  for (var i = 0; i < clicked.length; i++) {
    for (var die in diceObj){
      if (clicked[i].classList.contains(diceObj[die].dieValue)) {
        // currentDice.push(diceObj[die]);
        currentDice.push(diceObj[die].dieValue);
      }
    }
  }
  if (notClicked){
    for (var i = 0; i < notClicked.length; i++){
      notClicked[i].className = "rolled-die-imgs notclicked";
    }
    rollRandom();

  }

  checkForScores();

  return notClicked;
  // return currentDice;
}

function rollShuffle(){
  console.log("the dice are being shuffled first...");
  var randomDieRoll;
  var shuffleCount = 6;

  notClicked = document.querySelectorAll(".notclicked");

  var intervalID = setInterval(function(){
    for (var i = 0; i < notClicked.length; i++) {
      notClicked[i].classList.add("spin");
      console.log("should have class spin", notClicked[i]);
      randomDieRoll = Math.ceil(6 * Math.random());
      console.log("randomDieRoll is in interval", randomDieRoll);

      for (var die in diceObj) {
        if (randomDieRoll === diceObj[die].dieValue) {
          notClicked[i].src = diceObj[die].img;
        }
      }
    }

    shuffleCount -= 1;

    if (shuffleCount === 0) {
      clearInterval(intervalID);
      for (var i = 0; i < notClicked.length; i++){
        notClicked[i].classList.remove("spin");
        console.log("should not have class spin", notClicked[i]);
      }
      rollDice();
    }
  }, 100);
  console.log("diceObj after shuffle", diceObj, "and currentDice after rollShuffle", currentDice);
  // rollRandom();

}

function rollRandom() {
  console.log("randomizing roll...");

  for (var i = 0; i < notClicked.length; i++) {
    var randomDieRoll = Math.ceil(6 * Math.random());
    console.log("randomDieRoll is", randomDieRoll);

    for (var die in diceObj) {
      if (randomDieRoll === diceObj[die].dieValue) {
        notClicked[i].src = diceObj[die].img;
        notClicked[i].classList.add(diceObj[die].dieValue);
        console.log(notClicked[i]);
        // currentDice.push(diceObj[die]);
        currentDice.push(diceObj[die].dieValue);
      }
    }
  }
  console.log("currentDice",currentDice);

  rollCount();
}

function rollCount() {
  console.log("rolls are being counted here...");
  var note = document.querySelector(".note span");
  var pickMove = document.querySelector(".pick-a-move");


  if (count < 3) {
    note.classList.remove("hidden");
    rollButton.classList.remove("hidden");
    pickMove.classList.add("hidden");

    rollNumber.innerHTML = "<span class='bold-opensans'>Player " + playerNumber + ":</span> Roll! (" + (parseInt(rollsLeft)) + " Left)";

  } else {

    note.classList.add("hidden");
    rollButton.classList.add("hidden");
    pickMove.classList.remove("hidden");

  }

  return count;
}

function nextPlayerNumber() {
  if (playerNumber === 1){
    return 2;
  } else if (playerNumber === 2) {
    return 1;
  }
}


var currentPlayerNotClicked;

function nextPlayer(){
  console.log("nextPlayer has been called...");

  var currentPlayerSelector = ".player" + playerNumber + " .scorecard-notclicked .scorecard-score";

  currentPlayerNotClicked = document.querySelectorAll(currentPlayerSelector);
  console.log("currentPlayerNotClicked",currentPlayerNotClicked);
  for (var i = 0; i < currentPlayerNotClicked.length; i++) {
    console.log("clearing the inner text...");
    currentPlayerNotClicked[i].innerText = "";
  }

  rollShuffle();

  if (playerNumber === 2){
    if (currentPlayerNotClicked.length < 1) {
      console.log("there are no more moves for player 2");

      gameOver();
      return;
    }
  }

  playerNumber = nextPlayerNumber();

  playersTurn.innerText = playerNumber;

  count = 1;
  rollsLeft = 2;

  for (var i = 0; i < rollDieArray.length; i++){
    rollDieArray[i].classList.remove("clicked");
    rollDieArray[i].classList.add("notclicked");
  }
}

var gameOver = function() {
  console.log("endGame has been called...");
  gamePage.classList.add("hidden");
  resultsPage.classList.remove("hidden");

  p1GrandTotal = document.querySelector(".player1 .grand-total .total-dynamic").innerText;
  p2GrandTotal = document.querySelector(".player2 .grand-total .total-dynamic").innerText;

  console.log("p1GrandTotal",p1GrandTotal, "p2GrandTotal",p2GrandTotal);

  showResults();

  return;
}
