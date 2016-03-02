# Yahtzee


### Game Play / Pseudocode

- click new game
- 5 dice roll (random shuffle of 1 to 6) (set data-value of each die like in memory game)
- click the ones you want to keep or select your move
- reroll the unclicked ones (change opacity of clicked ones)
- up to two re-rolls (three rolls per round)
- rolling over plays will show possible scores
- select a play
- fade the plays that have already been selected
- keep showing the score for that particular play
- also show total score so far
- show upper/lower scores as well as bonuses
- player two's roll (repeat from step 2 --- 5 dice roll)
- player 1 and 2 go again
- continue until all plays are completed (13 plays total)
- show final score
- Keep track of how many wins for each?
- play again? click for new game



### Scoring

- top rolls have a bonus option
- multiple yahtzees give a bonus




#### ~ Do I want a multiplayer option? ~


```js
var game = {
  start: function(),
  end: function();
}
```
(use binding)


### Design
- make dice in photoshop
