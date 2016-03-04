console.log("test scoring js is loaded...");

var threeKindP1 = document.querySelector(".player1 .score-3kind .scorecard-score");
var threeKindP2 = document.querySelector(".player2 .score-3kind .scorecard-score");


var threeKindScore;
var previous = 0;

function updatingCountInObj(currentDiceSorted) {
  console.log("these are the current dice being checked for 3 of a kind",currentDiceSorted);

  counter = 0;

  for (var i = 0; i < currentDiceSorted.length; i++){
    if (currentDiceSorted[i] !== previous){
      counter = 0;

      console.log("not a match with previous number. counter is at", counter);
      previous = currentDiceSorted[i];
      console.log("previous number is now", previous);
    } else {
      counter += 1;
      console.log("previous number is a match. counter is at", counter);
      previous = currentDiceSorted[i];
      console.log("previous number is now", previous);

    }
    for (var die in diceObj) {
      if (currentDiceSorted[i] === diceObj[die]["dieValue"]) {
        diceObj[die]["count"] = counter + 1;
        console.log("here is the object with updated count", diceObj[die]);
      }
    }
  }

}

//----

// for (var die in diceObj){
//
//   for (var i = 0; i < currentDiceSorted.length; i++){
//     if (currentDiceSorted[i] !== previous) {
//       console.log("not a match. the counter is at" + counter);
//       previous = currentDiceSorted[i];
//       console.log("previous is now",previous);
//     } else {
//       if (currentDiceSorted[i] === diceObj[die]["dieValue"]){
//         previous = currentDiceSorted[i];
//         diceObj[die]["count"] += 1;
//         console.log("this is the counter at check3Kind for", diceObj[die], diceObj[die]["count"]);
//       }
//     }
//   }
// }


//--


// console.log("these are the current dice being checked for 3 of a kind",currentDiceSorted);
// counter = 0;
//
// for (var i = 0; i < currentDiceSorted.length; i++){
//   if (currentDiceSorted[i] != previous) {
//     console.log("not a match. the counter is at" + counter);
//     previous = currentDiceSorted[i];
//     console.log("previous is now",previous);
//   } else {
//     counter += 1;
//     console.log("this is the counter at check3Kind", counter);
//     if (counter > 2){
//       threeKindScore = 100;
//       if (playerNumber === 1) {
//         threeKindP1.innerText = threeKindScore;
//         threeKindP2.innerText = "";
//       } else if (playerNumber === 2){
//         threeKindP1.innerText = "",
//         threeKindP2.innerText = threeKindScore;
//       }
//     } else {
//       if (playerNumber === 1) {
//         threeKindP1.innerText = 0;
//         threeKindP2.innerText = "";
//       } else if (playerNumber === 2){
//         threeKindP1.innerText = "",
//         threeKindP2.innerText = 0;
//       }
//
//     }
//   }
// }
