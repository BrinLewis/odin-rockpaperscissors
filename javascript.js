function getComputerChoice() {
  let num = Math.floor(Math.random() * 3); //Randomly choose a number between 0 and 2.99... then round it down to the nearest integer.
  switch (num) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  } //Random number gets assigned to a corresponding game move to be used as the computer's play.
}

function getPlayerChoice() {
  let playerChoice = prompt("Enter your play: Rock, Paper or Scissors? First to 3 wins!"); //Asks for player's play
  return playerChoice.toLowerCase(); //Turn the user's answer to lower case to make inputs case insensetive.
}

let playerSelection = "none" //*
let computerSelection = "none" //*
let roundWinner = "nobody"; //*
let userScore = 0; //*
let computerScore = 0; //Declared these variables with placeholder default values.

function playRound(playerSelection, computerSelection) { //Function takes user and computer inputs, then outputs winner of each round.
  if (playerSelection == computerSelection) {
    console.log(`Draw! You both chose the same play! You: ${userScore}, Computer: ${computerScore}`)
    return roundWinner = "nobody";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`The computer chose scissors, +1 point to you! You: ${userScore + 1}, Computer: ${computerScore}`);
    return roundWinner = "User";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(`The computer chose paper, +1 point to them! You: ${userScore}, Computer: ${computerScore + 1}`);
    return roundWinner = "Computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`The computer chose rock, +1 point to you! You: ${userScore + 1}, Computer: ${computerScore}`);
    return roundWinner = "User";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log(`The computer chose scissors, +1 point to them! You: ${userScore}, Computer: ${computerScore + 1}`);
    return roundWinner = "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`The computer chose paper, +1 point to you! You: ${userScore + 1}, Computer: ${computerScore}`);
    return roundWinner = "User";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(`The computer chose rock, +1 point to them! You: ${userScore}, Computer:${computerScore + 1}`);
    return roundWinner = "Computer";
  } else {
    console.log("You didn't choose a valid play.")
    return roundWinner = "invalid"; //Any user input other than rock, paper or scissors will be invalid.
  }
}

function game() {
  for (let i = 0; i < 5; i++) { //Loop to play a round and add a point to winners score 5 times.
    playRound(getPlayerChoice(), getComputerChoice());
  if (roundWinner == "User") {
    userScore = ++userScore;
  } else if (roundWinner == "Computer") {
    computerScore = ++computerScore
  } else if (roundWinner == "invalid"){
    i = i - 1; //If user's input is invalid, this code takes one off of the loop number so it doesn't count as one of the five rounds.
  }}
  if (userScore > computerScore) { //Evaluates the final scores and declares a winner.
    return `Congratulations! You beat the computer ${userScore}:${computerScore}!`
  } else if (userScore < computerScore) {
    return `Damn! The computer beat you ${computerScore}:${userScore}!`
  } else {
    return `It's a draw! Final score: ${userScore}:${computerScore}!`
  }
}

console.log(game()); //Logs the game function to the console to begin the game.