console.log("lower scoring is loaded...");

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
  var threeKindPlayer = document.querySelector(".player" + playerNumber + " .score-3kind.scorecard-notclicked .scorecard-score");

  if (threeKindPlayer){
    threeKindScore = sum(currentDiceSorted);


    threeKindPlayer.innerText = 0;

    for (var die in diceObj){
      if (diceObj[die]["count"] >= 3) {
        console.log("you have three of a kind");
        threeKindPlayer.innerText = threeKindScore;
      }
    }
  }
}

function check4Kind(currentDiceSorted) {
  var fourKindPlayer = document.querySelector(".player" + playerNumber + " .score-4kind.scorecard-notclicked .scorecard-score");

  if (fourKindPlayer){
    fourKindScore = sum(currentDiceSorted);

    fourKindPlayer.innerText = 0;

    for (var die in diceObj){
      if (diceObj[die]["count"] >= 4) {
        console.log("you have four of a kind");
        fourKindPlayer.innerText = fourKindScore;
      }
    }
  }
}

function checkYahtzee(currentDiceSorted) {

  var yahtzeePlayer = document.querySelector(".player" + playerNumber + " .score-Y.scorecard-notclicked .scorecard-score");

  if (yahtzeePlayer) {
    yahtzeeScore = 50;

    yahtzeePlayer.innerText = 0;

    for (var die in diceObj){
      if (diceObj[die]["count"] >= 5) {
        console.log("you have yahtzee");
        yahtzeePlayer.innerText = yahtzeeScore;
      }
    }
  }
}


function checkChance(currentDiceSorted) {

  var chancePlayer = document.querySelector(".player" + playerNumber + " .score-chance.scorecard-notclicked .scorecard-score");

  if (chancePlayer) {
    chanceScore = sum(currentDiceSorted);
    chancePlayer.innerText = chanceScore;
  }
}


function checkFullHouse(currentDiceSorted) {
  var fullHousePlayer = document.querySelector(".player" + playerNumber + " .score-FH.scorecard-notclicked .scorecard-score");

  if (fullHousePlayer){
    fullHouseScore = 25;
    fullHousePlayer.innerText = 0;

    if ((currentDiceSorted[0] === currentDiceSorted[1] &&
         currentDiceSorted[1] === currentDiceSorted[2] &&
         currentDiceSorted[3] === currentDiceSorted[4]) ||
        (currentDiceSorted[0] === currentDiceSorted[1] &&
         currentDiceSorted[2] === currentDiceSorted[3] &&
         currentDiceSorted[3] === currentDiceSorted[4])) {
           console.log("hey, you've got a full house");

          fullHousePlayer.innerText = fullHouseScore;

     }
  }
}

function checkSmStraight(currentDiceSorted) {
  console.log("checking for a small straight...")

  var smStraightPlayer = document.querySelector(".player" + playerNumber + " .score-SS.scorecard-notclicked .scorecard-score");

  console.log(smStraightPlayer);
  if (smStraightPlayer) {
     smStraightScore = 30;
     smStraightPlayer.innerText = 0;

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
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
       if ((currentDiceSorted.toString().indexOf("1,2,3,4") > -1) ||
           (currentDiceSorted.toString().indexOf("2,3,4,5") > -1) ||
           (currentDiceSorted.toString().indexOf("3,4,5,6") > -1)) {

             console.log("you've got a small straight");
             smStraightPlayer.innerText = smStraightScore;
      }
    }
  }
}

function checkLgStraight(currentDiceSorted) {
  console.log("checking for a large straight...")

  var lgStraightPlayer = document.querySelector(".player" + playerNumber + " .score-LS.scorecard-notclicked .scorecard-score");

  if (lgStraightPlayer) {
    lgStraightScore = 40;
    lgStraightPlayer.innerText = 0;

    if (currentDiceSorted.toString() === "1,2,3,4,5" ||
        currentDiceSorted.toString() === "2,3,4,5,6") {

       console.log("you've got a large straight");
       lgStraightPlayer.innerText = lgStraightScore;
    }
  }
}
