function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors"
  } else {
    return "something has gone wrong!";
  }
  
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw! You both chose the same play!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! The computer chose scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! The computer chose paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! The computer chose rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! The computer chose scissors!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! The computer chose paper!"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! The computer chose rock!"
  } else {
    return "You didn't choose a valid play."
  }
}

let playerSelection = prompt("Enter your play: Rock, Paper or Scissors?");
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));