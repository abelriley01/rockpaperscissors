var i = 0;
var txt = "This is an intro to a game that is ridiculously simple and needs no introduction, it's almost an insult to think you need to read this.... Seriously, why are you still reading?";
var speed = 50;


typeWriter();
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const paperClick = document.getElementById("Paper");
paperClick.addEventListener("click", () => playRound("paper"));

const rockClick = document.getElementById("Rock");
rockClick.addEventListener("click", () => playRound("rock"));

const scissorsClick = document.getElementById("Scissors");
scissorsClick.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//appears to "type" the intro message
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if (i===txt.length){
        fadeout();
        setTimeout(replaceForTitle, 3000);
    } 
  }
}
//fades out the intro after it has finished typing
function fadeout() {
    var fadeTarget = document.getElementById("intro");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

function replaceForTitle(){
    const intro = document.getElementById("intro");
    const titling = document.createElement('h1');
    titling.innerHTML = "Rock, Paper, Scissors";
    titling.classList.add("title");
    intro.parentNode.replaceChild(titling, intro);
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = checkResultOfRound(playerChoice, computerChoice);
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
  }
  
  function checkResultOfRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }
  
  function updateScore(result) {
    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }
  
  function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById("result");
    const playerChoiceDiv = document.getElementById("userSelection");
    const computerChoiceDiv = document.getElementById("cpuSelection");
  
    playerChoiceDiv.textContent = `You picked ${playerChoice}`;
    computerChoiceDiv.textContent = `The computer picked ${computerChoice}`;
  
    if (result === "tie") {
      resultDiv.textContent = "It's a tie!";
    } else if (result === "player") {
      resultDiv.textContent = "You win!";
    } else {
      resultDiv.textContent = "The computer wins!";
    }
  
    updateScoreboard();
  }
  
  function updateScoreboard() {
    const playerScoreDiv = document.getElementById("playerScoreTracker");
    const computerScoreDiv = document.getElementById("cpuScoreTracker");
  
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
  
    if (playerScore === 5) {
      alert("You won the game!");
      resetGame();
    } else if (computerScore === 5) {
      alert("The computer won the game!");
      resetGame();
    }
  }
  
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
}