console.log("new scoring js is loaded...");

var threeKindP1 = document.querySelector(".player1 .score-3kind .scorecard-score");
var threeKindP2 = document.querySelector(".player2 .score-3kind .scorecard-score");

var checkMatchArray;

var lastNumber;

var threeKindScore;


function checkForMatch(currentDiceSorted){
  checkMatchArray = [];
  for (var i = 0; i < 4; i++){ // how much should i iterate by? .length isn't enough
    lastNumber = currentDiceSorted.length - 1;
    console.log("there are currently " + currentDiceSorted.length + " elements in currentDiceSorted");
    console.log("this is the new currentDiceSorted", currentDiceSorted);
    console.log("lastNumber index is currently", lastNumber);
    console.log("last number in array", currentDiceSorted[lastNumber]);
    if (currentDiceSorted.length > 0){ // while array is not empty
      checkMatchArray.push(currentDiceSorted[lastNumber]);
      currentDiceSorted.pop();
      lastNumber -= 1;
      console.log("checkarray", checkMatchArray);
      console.log("currentDiceSorted after pop", currentDiceSorted);

      if (checkMatchArray.length >= 3){
        threeOfKind();
      } else {
        notThreeOfKind();
      }

      console.log("current number", currentDiceSorted[lastNumber]);
      console.log("checkMatch number", checkMatchArray[0]);

      if (currentDiceSorted[lastNumber] === checkMatchArray[0]) {
        checkMatchArray.push(currentDiceSorted[lastNumber]);
        currentDiceSorted.pop();
        console.log("they match. pop it off. new currentDiceSorted", currentDiceSorted);
        console.log("new checkMatchArray", checkMatchArray);


      } else {
        checkMatchArray = [];
        console.log("checkMatchArray should be empty now",checkMatchArray);
      }
      console.log("lastNumber index:",lastNumber, "length",currentDiceSorted.length, "i is:",i);
    }
  }
}


function threeOfKind() {
  console.log("you have at least three of a kind");

  threeKindScore = 100; // sum of the numbers
  if (playerNumber === 1) {
      threeKindP1.innerText = threeKindScore;
      threeKindP2.innerText = "";
  } else if (playerNumber === 2){
    threeKindP1.innerText = "",
    threeKindP2.innerText = threeKindScore;
  }
}

function notThreeOfKind() {
  console.log("you have at least three of a kind");

  if (playerNumber === 1) {
      threeKindP1.innerText = 0;
      threeKindP2.innerText = "";
  } else if (playerNumber === 2){
    threeKindP1.innerText = "",
    threeKindP2.innerText = 0;
  }
}
