const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function properCase(string) {
  const lower = string.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = properCase(playerSelection);

  if (playerSelection == computerSelection) {
    return `Tie! Both picked ${computerSelection}`;
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return "You win! Rock beats Scissors";
    }
    if (computerSelection == "Paper") {
      return "You lose! Paper beats Rock";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You win! Paper beats Rock";
    }
    if (computerSelection == "Scissors") {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "You win! Scissors beats Paper";
    }
    if (computerSelection == "Rock") {
      return "You lose! Rock beats Scissors";
    }
  }
}

const playerSelection = "roCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
