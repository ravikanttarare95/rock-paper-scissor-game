const humanScore = document.getElementById("h-score");
const computerScore = document.getElementById("c-score");
const humanChoice = document.getElementById("h-choice");
const computerChoice = document.getElementById("c-choice");
const result = document.getElementById("result-message");

// function playGame(move) {
//   if (move === "rock") {
//     humanChoice.innerText = "Rock";
//   } else if (move === "paper") {
//     humanChoice.innerText = "Paper";
//   } else {
//     humanChoice.innerText = "Scissor";
//   }
// }

function playRock() {
  humanChoice.innerText = "Rock";
  computerGame();
  gameResult();
}

function playPaper() {
  humanChoice.innerText = "Paper";
  computerGame();
  gameResult();
}

function playScissor() {
  humanChoice.innerText = "Scissor";
  computerGame();
  gameResult();
}

function computerGame() {
  min = 1;
  max = 3;
  const randomNumber = Math.floor(Math.random() * max - min + 1) + min;
  if (randomNumber === 1) {
    computerChoice.innerText = "Rock";
  } else if (randomNumber === 2) {
    computerChoice.innerText = "Paper";
  } else if (randomNumber === 3) {
    computerChoice.innerText = "Scissor";
  }
  return randomNumber;
}

function gameResult() {
  if (humanChoice.innerText === computerChoice.innerText) {
    result.innerText = "It's a Tie!";
    result.style.color = "grey";
  } else if (
    (humanChoice.innerText === "Rock" &&
      computerChoice.innerText === "Scissor") ||
    (humanChoice.innerText === "Paper" &&
      computerChoice.innerText === "Rock") ||
    (humanChoice.innerText === "Scissor" &&
      computerChoice.innerText === "Paper")
  ) {
    result.innerText = "You Win!";
    result.style.color = "green";
    humanScore.innerText = parseInt(humanScore.innerText) + 1;
  } else {
    result.innerText = "You Lose!";
    result.style.color = "red";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
}
