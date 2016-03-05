console.log("lower scoring is loaded...");

var threeKindP1 = document.querySelector(".player1 .score-3kind .scorecard-score");
var threeKindP2 = document.querySelector(".player2 .score-3kind .scorecard-score");

var fourKindP1 = document.querySelector(".player1 .score-4kind .scorecard-score");
var fourKindP2 = document.querySelector(".player2 .score-4kind .scorecard-score");

var yahtzeeP1 = document.querySelector(".player1 .score-Y .scorecard-score");
var yahtzeeP2 = document.querySelector(".player2 .score-Y .scorecard-score");

var chanceP1 = document.querySelector(".player1 .score-chance .scorecard-score");
var chanceP2 = document.querySelector(".player2 .score-chance .scorecard-score");

var fullHouseP1 = document.querySelector(".player1 .score-FH .scorecard-score");
var fullHouseP2 = document.querySelector(".player2 .score-FH .scorecard-score");

var smStraightP1 = document.querySelector(".player1 .score-SS .scorecard-score");
var smStraightP2 = document.querySelector(".player2 .score-SS .scorecard-score");

var lgStraightP1 = document.querySelector(".player1 .score-LS .scorecard-score");
var lgStraightP2 = document.querySelector(".player2 .score-LS .scorecard-score");


var threeKindScore;
var fourKindScore;
var yahtzeeScore;
var chanceScore;
var fullHouseScore;
var smStraightScore;
var lgStraightScore;

var sum = function(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function check3Kind(currentDiceSorted) {

  threeKindScore = sum(currentDiceSorted);

  if (playerNumber === 1) {
    threeKindP1.innerText = 0;
    threeKindP2.innerText = "";
  } else if (playerNumber === 2){
    threeKindP1.innerText = "",
    threeKindP2.innerText = 0;
  }

  for (var die in diceObj){
    if (diceObj[die]["count"] >= 3) {
      console.log("you have three of a kind");
      if (playerNumber === 1) {
          threeKindP1.innerText = threeKindScore;
          threeKindP2.innerText = "";
      } else if (playerNumber === 2){
        threeKindP1.innerText = "",
        threeKindP2.innerText = threeKindScore;
      }
    }
  }
}

function check4Kind(currentDiceSorted) {
  fourKindScore = sum(currentDiceSorted);

  if (playerNumber === 1) {
    fourKindP1.innerText = 0;
    fourKindP2.innerText = "";
  } else if (playerNumber === 2){
    fourKindP1.innerText = "",
    fourKindP2.innerText = 0;
  }

  for (var die in diceObj){
    if (diceObj[die]["count"] >= 4) {
      console.log("you have four of a kind");
      if (playerNumber === 1) {
        fourKindP1.innerText = fourKindScore;
        fourKindP2.innerText = "";
      } else if (playerNumber === 2){
        fourKindP1.innerText = "",
        fourKindP2.innerText = fourKindScore;
      }
    }
  }
}

function checkYahtzee(currentDiceSorted) {
  yahtzeeScore = 50;

  if (playerNumber === 1) {
    yahtzeeP1.innerText = 0;
    yahtzeeP2.innerText = "";
  } else if (playerNumber === 2){
    yahtzeeP1.innerText = "",
    yahtzeeP2.innerText = 0;
  }

  for (var die in diceObj){
    if (diceObj[die]["count"] >= 5) {
      console.log("you have yahtzee");
      if (playerNumber === 1) {
        yahtzeeP1.innerText = yahtzeeScore;
        yahtzeeP2.innerText = "";
      } else if (playerNumber === 2){
        yahtzeeP1.innerText = "",
        yahtzeeP2.innerText = yahtzeeScore;
      }
    }
  }
}

function checkChance(currentDiceSorted) {
  chanceScore = sum(currentDiceSorted);

  if (playerNumber === 1) {
    chanceP1.innerText = chanceScore;
    chanceP2.innerText = "";
  } else if (playerNumber === 2){
    chanceP1.innerText = "",
    chanceP2.innerText = chanceScore;
  }
}

function checkFullHouse(currentDiceSorted) {
  fullHouseScore = 25;

  if (playerNumber === 1) {
    fullHouseP1.innerText = 0;
    fullHouseP2.innerText = "";
  } else if (playerNumber === 2){
    fullHouseP1.innerText = "",
    fullHouseP2.innerText = 0;
  }

  if ((currentDiceSorted[0] === currentDiceSorted[1] &&
       currentDiceSorted[1] === currentDiceSorted[2] &&
       currentDiceSorted[3] === currentDiceSorted[4]) ||
      (currentDiceSorted[0] === currentDiceSorted[1] &&
       currentDiceSorted[2] === currentDiceSorted[3] &&
       currentDiceSorted[3] === currentDiceSorted[4])) {

         console.log("hey, you've got a full house");

         if (playerNumber === 1) {
           fullHouseP1.innerText = fullHouseScore;
           fullHouseP2.innerText = "";
         } else if (playerNumber === 2){
           fullHouseP1.innerText = "",
           fullHouseP2.innerText = fullHouseScore;
         }
   }
}

function checkSmStraight(currentDiceSorted) {
  console.log("checking for a small straight...")
  smStraightScore = 30;

  if (playerNumber === 1) {
    smStraightP1.innerText = 0;
    smStraightP2.innerText = "";
  } else if (playerNumber === 2){
    smStraightP1.innerText = "",
    smStraightP2.innerText = 0;
  }


  if (currentDiceSorted.length >= 4) {
    for (var i = 0; i < currentDiceSorted.length; i++) {
      console.log("currentDiceSorted[i]",currentDiceSorted[i]);
      console.log("currentDiceSorted[i + 1]",currentDiceSorted[i + 1]);
      console.log(currentDiceSorted[i] === currentDiceSorted[i + 1]);
      if (currentDiceSorted[i] === currentDiceSorted[i + 1]) {
        currentDiceSorted.splice(i, 1);
        i -= 1;
        console.log("i is now", i);
        console.log("they are equal");
      }
      console.log("currentDiceSorted after splice",currentDiceSorted);
    }

    if ((currentDiceSorted.toString().indexOf("1,2,3,4") > -1) ||
        (currentDiceSorted.toString().indexOf("2,3,4,5") > -1) ||
        (currentDiceSorted.toString().indexOf("3,4,5,6") > -1)) {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

        console.log("you've got a small straight");
        if (playerNumber === 1) {
          smStraightP1.innerText = smStraightScore;
          smStraightP2.innerText = "";
        } else if (playerNumber === 2){
          smStraightP1.innerText = "",
          smStraightP2.innerText = smStraightScore;
        }
    }
  }
}

function checkLgStraight(currentDiceSorted) {
  console.log("checking for a large straight...")
  lgStraightScore = 40;

  if (playerNumber === 1) {
    lgStraightP1.innerText = 0;
    lgStraightP2.innerText = "";
  } else if (playerNumber === 2){
    lgStraightP1.innerText = "",
    lgStraightP2.innerText = 0;
  }

  if (currentDiceSorted.toString() === "1,2,3,4,5" ||
      currentDiceSorted.toString() === "2,3,4,5,6") {

     console.log("you've got a large straight");

     if (playerNumber === 1) {
       lgStraightP1.innerText = lgStraightScore;
       lgStraightP2.innerText = "";
     } else if (playerNumber === 2){
       lgStraightP1.innerText = "",
       lgStraightP2.innerText = lgStraightScore;
     }
   }
}
