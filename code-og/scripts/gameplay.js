console.log("gameplay js is loaded...");

var count = 0;
var playerNumber = 1;

startButton.addEventListener("click", function(){
  openingPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  count += 1;
  console.log("count",count);
  startGame();
});


function startGame(){
  console.log("the game has started...");

  rollButton.addEventListener("click", function(){
    if (count <= 4){
      console.log("roll cta clicked");
      count += 1;
      console.log("count in startGame",count);
      rollDice();
      checkForScore();
    }
  });
  clickDiceInit();
  return count;
}

function rollDice(){
  notClicked = document.querySelectorAll(".notclicked");
  console.log("notClicked",notClicked);
  if(notClicked){
    rollRandom();
  }
  return notClicked;
}

function rollRandom(){
  console.log("dice have been rolled...");

  for (var i = 0; i < notClicked.length; i++){
    var randomDieRoll = Math.ceil(6 * Math.random());
    console.log("randomDieRoll is", randomDieRoll);
    for (var die in diceObj) {
      if (randomDieRoll === diceObj[die].dieValue){
        notClicked[i].src = diceObj[die].img;
        notClicked[i].classList.add(diceObj[die].imgClass)
      }
    }
  }
  rollCount();
}

function rollCount() {
  if (count <= 4) {
    console.log("count in rollCount", count);
    rollNumber.innerText = "Roll #" + count;
    if (count === 4){
      rollNumber.innerText = "Choose A Play";
    }
  } else {
    if (playerNumber === 1){
      playerNumber = 2;
    } else if (playerNumber === 2) {
      playerNumber = 1;
    }
    playersTurn.innerText = playerNumber;

    rollNumber.innerText = "Player " + playerNumber + "'s Turn";
    console.log("count is more than 4");
    nextPlayer();
    count = 0;
  }
  return count;
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

function nextPlayer(){
  console.log("nextPlayer has been called...")
  for (var i = 0; i < rollDieArray.length; i++){
    rollDieArray[i].src = "./imgs/die0.png";
    rollDieArray[i].classList.remove("clicked");
    rollDieArray[i].classList.add("notclicked");
  }
}
