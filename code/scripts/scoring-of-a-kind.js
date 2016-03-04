console.log("lower scoring js is loaded...");

var threeKindP1 = document.querySelector(".player1 .score-3kind .scorecard-score");
var threeKindP2 = document.querySelector(".player2 .score-3kind .scorecard-score");

var fourKindP1 = document.querySelector(".player1 .score-4kind .scorecard-score");
var fourKindP2 = document.querySelector(".player2 .score-4kind .scorecard-score");

var yahtzeeP1 = document.querySelector(".player1 .score-Y .scorecard-score");
var yahtzeeP2 = document.querySelector(".player2 .score-Y .scorecard-score");

var threeKindScore;
var fourKindScore;
var yahtzeeScore;

function check3Kind(currentDiceSorted) {
  counter = 0;

  for (var i = 1; i < currentDiceSorted.length; i++){
    if (currentDiceSorted[i] === currentDiceSorted[i - 1]){
      counter += 1;
      console.log("counter",counter);
    } else {
      counter = 0;
    }

    if (counter >= 2) {
      console.log("counter indicates a match");
      threeKindScore = 100; // sum of the numbers
      if (playerNumber === 1) {
          threeKindP1.innerText = threeKindScore;
          threeKindP2.innerText = "";
      } else if (playerNumber === 2){
        threeKindP1.innerText = "",
        threeKindP2.innerText = threeKindScore;
      }
    } else {
      if (playerNumber === 1) {
          threeKindP1.innerText = 0;
          threeKindP2.innerText = "";
      } else if (playerNumber === 2){
        threeKindP1.innerText = "",
        threeKindP2.innerText = 0;
      }
    }
  }
}

function check4Kind(currentDiceSorted) {
  counter = 0;

  for (var i = 1; i < currentDiceSorted.length; i++){
    if (currentDiceSorted[i] === currentDiceSorted[i - 1]){
      counter += 1;
      console.log("counter",counter);
    } else {
      counter = 0;
    }

    if (counter >= 3) {
      fourKindScore = 100; // sum of the numbers
      if (playerNumber === 1) {
          fourKindP1.innerText = fourKindScore;
          fourKindP2.innerText = "";
      } else if (playerNumber === 2){
        fourKindP1.innerText = "",
        fourKindP2.innerText = fourKindScore;
      }
    } else {
      if (playerNumber === 1) {
          fourKindP1.innerText = 0;
          fourKindP2.innerText = "";
      } else if (playerNumber === 2){
        fourKindP1.innerText = "",
        fourKindP2.innerText = 0;
      }
    }
  }
}


function checkYahtzee(currentDiceSorted) {
  counter = 0;

  for (var i = 1; i < currentDiceSorted.length; i++){
    if (currentDiceSorted[i] === currentDiceSorted[i - 1]){
      counter += 1;
      console.log("counter",counter);
    } else {
      counter = 0;
    }

    if (counter >= 3) {
      yahtzeeScore = 100; // sum of the numbers
      if (playerNumber === 1) {
          yahtzeeP1.innerText = yahtzeeScore;
          yahtzeeP2.innerText = "";
      } else if (playerNumber === 2){
        yahtzeeP1.innerText = "",
        yahtzeeP2.innerText = yahtzeeScore;
      }
    } else {
      if (playerNumber === 1) {
          yahtzeeP1.innerText = 0;
          yahtzeeP2.innerText = "";
      } else if (playerNumber === 2){
        yahtzeeP1.innerText = "",
        yahtzeeP2.innerText = 0;
      }
    }
  }
}
