console.log("score functionality is loaded...");

function scorecardClickInit() {

  for (var i  = 0; i < scoreDieArrayP1.length; i++){
    scoreDieArrayP1[i].addEventListener("click", function() {
      if (playerNumber === 1){
        clickedScorecard(this);
      }
    });
  }

  for (var i  = 0; i < scoreDieArrayP2.length; i++){
    scoreDieArrayP2[i].addEventListener("click", function() {
      if (playerNumber === 2){
        clickedScorecard(this);
      }
    });
  }
}

function clickedScorecard(scoreItem) {
  console.log("this in scorecardClickInit",scoreItem);
  // if this was already clicked, then get out
  if (scoreItem.classList.contains("scorecard-clicked")){
    // console.log("testing clickability before return");
    return;
  }
  scoreItem.classList.add("scorecard-clicked");
  scoreItem.classList.remove("scorecard-notclicked");
  // console.log("testing click instead of return");


  // calculating upperscore
  var clickedUpperSelector = ".player" + playerNumber + " .upper-score .scorecard-clicked .scorecard-score";
  var clickedUpperScore = document.querySelectorAll(clickedUpperSelector);

  console.log("clickedUpperSelector",clickedUpperSelector);
  console.log("clickedUpperScore",clickedUpperScore);

  var upperSelector = ".player" + playerNumber + " .upper-score-totals .total .total-dynamic";
  var upperTotalEl = document.querySelector(upperSelector);

  var upperScore = 0;
  for (var i = 0; i < clickedUpperScore.length; i++){
    upperScore += parseInt(clickedUpperScore[i].innerText);
    console.log("upperScore is", upperScore);
  }


  //calculating bonus
  var bonusSelector = ".player" + playerNumber + " .bonus .total-dynamic";
  var bonusTotalEl = document.querySelector(bonusSelector);

  var bonusScore = 0;
  if (upperScore >= 63) {
    bonusScore = 35;
  }
  console.log("bonusScore is", bonusScore);


  //calculating lowerscore
  var clickedLowerSelector = ".player" + playerNumber + " .lower-score .scorecard-clicked .scorecard-score";
  var clickedLowerScore = document.querySelectorAll(clickedLowerSelector);

  var lowerSelector = ".player" + playerNumber + " .lower-score-totals .total .total-dynamic";
  var lowerTotalEl = document.querySelector(lowerSelector);

  var lowerScore = 0;
  for (var i = 0; i < clickedLowerScore.length; i++){
    lowerScore += parseInt(clickedLowerScore[i].innerText);
    console.log("lowerScore is", lowerScore);
  }


  //calculating grand total
  var grandSelector = ".player" + playerNumber + " .grand-total .total-dynamic";
  var grandTotalEl = document.querySelector(grandSelector);

  console.log("grandSelector", grandSelector, "grandTotalEl", grandTotalEl);

  grandTotal = upperScore + bonusScore + lowerScore;

  //declaring innerText
  upperTotalEl.innerText = upperScore;
  bonusTotalEl.innerText = bonusScore;
  lowerTotalEl.innerText = lowerScore;
  grandTotalEl.innerText = grandTotal;


  nextPlayer();
  rollDice();
  // var scorecardScore = scoreItem.querySelector(".scorecard-score").innerText;
  // console.log("parent element", scoreItem.parentElement);
  // console.log("scorecardScore", scorecardScore);

}
