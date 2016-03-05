console.log("updating count js is loaded...");

var previous = 0;

function updatingCountInObj(currentDiceSorted) {
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

  check3Kind(currentDiceSorted);
  check4Kind(currentDiceSorted);
  checkYahtzee(currentDiceSorted);

}
