function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

function getPlayerChoice() {
  return prompt("Enter your play: Rock, Paper or Scissors? First to 3 wins!");
}

let playerSelection = "none"
let computerSelection = "none"
let roundWinner = "nobody";
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Draw! You both chose the same play!")
    return roundWinner = "nobody";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("The computer chose scissors, +1 point to you!");
    return roundWinner = "User";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("The computer chose paper, +1 point to them!");
    return roundWinner = "Computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("The computer chose rock, +1 point to you!");
    return roundWinner = "User";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("The computer chose scissors, +1 point to them!");
    return roundWinner = "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("The computer chose paper, +1 point to you!");
    return roundWinner = "User";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("The computer chose rock, +1 point to them!");
    return roundWinner = "Computer";
  } else {
    console.log("You didn't choose a valid play.")
    return roundWinner = "nobody";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  if (roundWinner == "User") {
    userScore = ++userScore;
  } else if (roundWinner == "Computer") {
    computerScore = ++computerScore
  }}
  if (userScore > computerScore) {
    return `Congratulations! You beat the computer ${userScore}:${computerScore}!`
  } else if (userScore < computerScore) {
    return `Damn! The computer beat you ${computerScore}:${userScore}!`
  } else {
    return `It's a draw! You drew ${userScore}:${computerScore}!`
  }
}

console.log(game());