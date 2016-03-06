console.log("results js is loaded...");

function showResults() {

  var p1FinalScore = document.querySelector(".score .p1score");
  var p2FinalScore = document.querySelector(".score .p2score");

  p1FinalScore.innerText = p1GrandTotal;
  p2FinalScore.innerText = p2GrandTotal;

  console.log("p1", p1GrandTotal, "p2", p2GrandTotal);

  if (parseInt(p1GrandTotal) > parseInt(p2GrandTotal)) {
    winnerMessage.innerText = "Player 1 Wins!";
  } else if (parseInt(p1GrandTotal) < parseInt(p2GrandTotal)) {
    winnerMessage.innerText = "Player 2 Wins!";
  } else if (parseInt(p1GrandTotal) === parseInt(p2GrandTotal)){
    winnerMessage.innerText = "It's a Tie!";
  }

}


playAgainBtn.addEventListener("click",function(){
  console.log("this",this);
  playAgain();
})

function playAgain () {

  //reset scorecard

  for (var i = 0; i < scorecardScore.length; i++){
    scorecardScore[i].innerText = "";
  }

  for (var i = 0; i < scoreItemP1.length; i++){
    scoreItemP1[i].classList.remove("scorecard-clicked");
    scoreItemP1[i].classList.add("scorecard-notclicked");
  }

  for (var i = 0; i < scoreItemP2.length; i++){
    scoreItemP2[i].classList.remove("scorecard-clicked");
    scoreItemP2[i].classList.add("scorecard-notclicked");
  }

  count = 0;

  startGame();
}
