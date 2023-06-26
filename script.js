const maxScore = 5;

let playerScore = 0;
let computerScore = 0;

const gameDiv = document.querySelector("#game");
const gameOverDiv = document.querySelector("#game-over");

const roundWinner = document.querySelector("#round-winner");
const gameWinner = document.querySelector("#game-winner");

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => { button.addEventListener('click', () => console.log(playRound(button.dataset.choice)))})

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundWinner.innerText = "";

  gameDiv.classList.remove('hidden');
  gameOverDiv.classList.add('hidden');
}

function endGame() {
  gameDiv.classList.add('hidden');
  gameOverDiv.classList.remove('hidden');
  gameWinner.innerText = `Game over! Computer: ${computerScore} Player ${playerScore}`;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection) {

  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);

  if (winner == "Computer") {
    computerScore++;
    roundWinner.innerText =`You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (winner == "Player") {
    playerScore++;
    roundWinner.innerText =`You win! ${playerSelection} beats ${computerSelection}`;
  } else if (winner == "Tie") {
    roundWinner.innerText =`Tie! Both picked ${computerSelection}`;
  } else {
    roundWinner.innerText = "Something went wrong";
  }

  if(playerScore >= maxScore || computerScore >= maxScore) {
    endGame();
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