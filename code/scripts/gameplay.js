console.log("gameplay js is loaded...");

var count = 0;
var playerNumber = 1;
var notClicked;

var currentDice;

startButton.addEventListener("click", function(){
  // openingPage.classList.add("hidden");
  // gamePage.classList.remove("hidden");
  count += 1;
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
    if (count >= 3) {
      nextPlayer();
    }

    if (count < 3){
      count += 1;
      rollDice();
    }

    console.log("rollBtn clicked");
    console.log("count should increase when rollBtn clicked",count);
  });

  endGame.addEventListener("click",function() {
    gamePage.classList.add("hidden");
    resultsPage.classList.remove("hidden");
  })

  clickDiceInit();
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
        currentDice.push(diceObj[die]);
      }
    }
  }
  if (notClicked){
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
        currentDice.push(diceObj[die]);
      }
    }
  }
  console.log("currentDice",currentDice);

  rollCount();
}

function rollCount() {
  if (count < 3) {
    rollNumber.innerText = "Go for Roll #" + (parseInt(count) + 1);
  } else {

    rollNumber.innerText = "Player " + nextPlayerNumber() + "'s Turn";
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

function nextPlayer(){
  console.log("nextPlayer has been called...");

  playerNumber = nextPlayerNumber();

  playersTurn.innerText = playerNumber;

  count = 0;

  for (var i = 0; i < rollDieArray.length; i++){
    rollDieArray[i].classList.remove("clicked");
    rollDieArray[i].classList.add("notclicked");
  }
}
