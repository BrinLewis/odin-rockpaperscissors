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

let playerSelection = "none" //*
let computerSelection = "none" //*
let roundWinner = "nobody"; //*
let userScore = 0; //*
let computerScore = 0; //Declared these variables with placeholder default values.

function playRound(playerSelection, computerSelection) { //Function takes user and computer inputs, then outputs winner of each round.
  if (playerSelection == computerSelection) {
    results.textContent = `Draw! You both chose the same play! 
    You: ${userScore}, Computer: ${computerScore}`
    return roundWinner = "nobody";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    results.textContent = `The computer chose scissors, +1 point to you! 
    You: ${userScore + 1}, Computer: ${computerScore}`;
    return roundWinner = "User";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    results.textContent = `The computer chose paper, +1 point to them! 
    You: ${userScore}, Computer: ${computerScore + 1}`;
    return roundWinner = "Computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    results.textContent = `The computer chose rock, +1 point to you! 
    You: ${userScore + 1}, Computer: ${computerScore}`;
    return roundWinner = "User";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    results.textContent = `The computer chose scissors, +1 point to them! 
    You: ${userScore}, Computer: ${computerScore + 1}`;
    return roundWinner = "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    results.textContent = `The computer chose paper, +1 point to you! 
    You: ${userScore + 1}, Computer: ${computerScore}`;
    return roundWinner = "User";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    results.textContent = `The computer chose rock, +1 point to them! 
    You: ${userScore}, Computer:${computerScore + 1}`;
    return roundWinner = "Computer";
  } else {
    results.textContent = "You didn't choose a valid play."
    return roundWinner = "invalid"; //Any user input other than rock, paper or scissors will be invalid.
  }
}

const rockBtn = document.querySelector("#rockbtn");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice()); //When rock button is clicked, play a round with rock as player's choice.
  if (roundWinner == "User") {
    userScore = ++userScore;
  } else if (roundWinner == "Computer") {
    computerScore = ++computerScore
  }
  isGameOver();
});
const paperBtn = document.querySelector("#paperbtn");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice()); //When paper button is clicked, play a round with paper as player's choice.
  if (roundWinner == "User") {
    userScore = ++userScore;
  } else if (roundWinner == "Computer") {
    computerScore = ++computerScore
  }
  isGameOver();
});
const scissorsBtn = document.querySelector("#scissorsbtn");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice()); //When scissors button is clicked, play a round with scissors as player's choice.
  if (roundWinner == "User") {
    userScore = ++userScore;
  } else if (roundWinner == "Computer") {
    computerScore = ++computerScore
  }
  isGameOver();
});

const results = document.querySelector(".results");

function isGameOver() {
  if (userScore === 5) {
    results.textContent = `Congratulations! You beat the computer ${userScore}:${computerScore}!`
    userScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore === 5) {
    results.textContent = `Damn! The computer beat you ${computerScore}:${userScore}!`
    userScore = 0;
    computerScore = 0;
    return;
  }
}


/* function game() {
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

results.textContent = game()); //Logs the game function to the console to begin the game. */