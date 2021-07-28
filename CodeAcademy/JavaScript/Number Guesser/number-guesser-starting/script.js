let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Name: generateTarget
// Description: called at start of each round to generate
// new secret target number
const generateTarget = () =>
{
  return Math.floor(Math.random() * 10);
}
//console.log(generateTarget());

// Name: comareGuesses
// Description: Called each round to determine which guess
// is cloest to the target number
//
// - Has three parameters representing the user (human) guess,
//   a computer guess, and the secret target number to be guessed.
// - Determines which player (human or computer) wins based on which
//   guess is closest to the target. If both players are tied, the
//   human user should win.
// - Return true if the human player wins, and false if the computer
//  player wins.
const compareGuesses = (hGuess, cGuess, secretTarget) =>
{
  const hDiff = Math.abs(secretTarget - hGuess);
  const cDiff = Math.abs(secretTarget - cGuess);
  if (hDiff <= cDiff)
  {
    return true;
  }
  else // hDiff > cDiff
  {
    return false;
  }
}
//console.log(compareGuesses(7, 4, 5));

// Name: updateScore()
// Descriptioin: Correctly increase the winner score after each round
// - take in string value of winner
// - increase the score varaible (humanScore or computerScore) by 1
//   depending on the winner passed into the updateScore.
//   Either 'computer' or 'human'
const updateScore = winner =>
{
  if (winner == 'human')
  {
    humanScore++;
  }
  else
  {
    computerScore++;
  }
}

// Name: advanceRound
// Description: increase the round number by 1
const advanceRound = () =>
{
  currentRoundNumber++;
}
