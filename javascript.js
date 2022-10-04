function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "Rock";
  } else if (num === 1) {
    return "Paper";
  } else if (num === 2) {
    return "Scissors"
  } else {
    return "Something has gone wrong!";
  }
  
}
