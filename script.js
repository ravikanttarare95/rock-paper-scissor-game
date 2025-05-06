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
  humanChoice.src = "./images/rock.png";
  computerGame();
  gameResult();
}

function playPaper() {
  humanChoice.src = "./images/paper.png";
  computerGame();
  gameResult();
}

function playScissor() {
  humanChoice.src = "./images/scissor.png";
  computerGame();
  gameResult();
}

function computerGame() {
  min = 1;
  max = 3;
  const randomNumber = Math.floor(Math.random() * max - min + 1) + min;
  if (randomNumber === 1) {
    computerChoice.src = "./images/rock.png";
  } else if (randomNumber === 2) {
    computerChoice.src = "./images/paper.png";
  } else if (randomNumber === 3) {
    computerChoice.src = "./images/scissor.png";
  }
  return randomNumber;
}

function gameResult() {
  if (humanChoice.src === computerChoice.src) {
    result.innerText = "It's a Tie!";
    result.style.color = "#7f8c8d";
  } else if (
    (humanChoice.src.includes("rock.png") &&
      computerChoice.src.includes("scissor.png")) ||
    (humanChoice.src.includes("paper.png") &&
      computerChoice.src.includes("rock.png")) ||
    (humanChoice.src.includes("scissor.png") &&
      computerChoice.src.includes("paper.png"))
  ) {
    result.innerText = "You Win!";
    result.style.color = "#27ae60";
    humanScore.innerText = parseInt(humanScore.innerText) + 1;
  } else {
    result.innerText = "You Lose!";
    result.style.color = "#c0392b";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }
}

function resetGame() {
  humanScore.innerText = "0";
  computerScore.innerText = "0";
  humanChoice.src = "./images/settings.png";
  computerChoice.src = "./images/settings.png";
  result.innerText = "Result";
  result.style.color = "grey";
}
