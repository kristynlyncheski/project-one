console.log("gameplay js is loaded...");

var count = 0;
var rollsLeft = 3;
var playerNumber = 1;
var notClicked;

var currentDice;

var checkMatchArray;

startButton.addEventListener("click", function(){
  count += 1;
  rollsLeft -= 1;
  console.log("count",count);
  startGame();
});

playAgain.addEventListener("click",function(){
  console.log("this",this);
  startGame();
})


function startGame(){
  console.log("the game has started...");

  openingPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  resultsPage.classList.add("hidden");

  rollDice();

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
      rollDice();
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
  var note = document.querySelector(".note span");
  var pickMove = document.querySelector(".pick-a-move");


  if (count < 3) {
    note.classList.remove("hidden");
    rollButton.classList.remove("hidden");
    pickMove.classList.add("hidden");

    // if (count === 1){
    //   rollNumber.innerText = "Player #" + playerNumber + " Roll!"
    //
    // }
    // rollNumber.innerText = "Roll Again!"
    // rollNumber.innerText = "Go for Roll #" + (parseInt(count) + 1);

    rollNumber.innerHTML = "<span class='bold-opensans'>Player " + playerNumber + ":</span> Roll! (" + (parseInt(rollsLeft)) + " Left)";

  } else {

    note.classList.add("hidden");
    rollButton.classList.add("hidden");
    pickMove.classList.remove("hidden");

    // rollNumber.innerText = "Player " + nextPlayerNumber() + "'s Turn";
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

  if (playerNumber === 2){
    if (currentPlayerNotClicked.length < 1) {
      console.log("there are no more moves for player 2");
      gameOver();
      return;
    }
  }




  // clearing the scoreboard for all not cliekd items in current player before player changes
  // var notclicked = doc.qs".notclicked";
  // var element; (all elements) -- -array
  // for loop through the array
  // notclicked.element.innerText = "";


  //if array = []; .length < 1 for player 2
  //gameOver();
  //return;


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

  return;

}
