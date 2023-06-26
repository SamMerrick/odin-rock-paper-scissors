let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameFinished = false;

const resultText = document.querySelector("#result");
const buttons = document.querySelectorAll(".choice");

buttons.forEach(button => { button.addEventListener('click', () => console.log(playRound(button.dataset.choice)))})

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection) {

  if(gameFinished) return;

  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);

  if (winner == "Computer") {
    computerScore++;
    resultText.innerText =`You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (winner == "Player") {
    playerScore++;
    resultText.innerText =`You win! ${playerSelection} beats ${computerSelection}`;
  } else if (winner == "Tie") {
    resultText.innerText =`Tie! Both picked ${computerSelection}`;
  } else {
    resultText.innerText = "Something went wrong";
  }

  round++;

  if(round >= 5) {
    gameFinished = true;
    console.log(`Game over! Computer: ${computerScore} Player ${playerScore}`);
  }
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return "Player";
    }
    if (computerSelection == "Paper") {
      return "Computer";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "Player";
    }
    if (computerSelection == "Scissors") {
      return "Computer";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "Player";
    }
    if (computerSelection == "Rock") {
      return "Computer";
    }
  }
}