let playerChoice;
let computerChoice;
let upOrDown;
var i = 0;
var txt = "This is an intro to a game that is ridiculously simple and needs no introduction, it's almost an insult to think you need to read this.... Seriously, why are you still reading?";
var speed = 50;


//typeWriter();
scoreTracking();

const paperClick = document.getElementById("Paper");
paperClick.addEventListener("click", paperSelection);

const rockClick = document.getElementById("Rock");
rockClick.addEventListener("click", rockSelection);

const scissorsClick = document.getElementById("Scissors");
scissorsClick.addEventListener("click", scissorsSelection);

function paperSelection(){
    getComputerChoice();
    playRound(computerChoice, "paper");

}
function rockSelection(){
    getComputerChoice();
    playRound(computerChoice, "rock");

}

function scissorsSelection(){
    getComputerChoice();
    playRound(computerChoice, "scissors");

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

function getComputerChoice(){
        let random =(Math.random() * 3);
        if (random <= 1){
            computerChoice = "Rock"
        }
        else if (random > 1 && random <= 2){
            computerChoice = "Paper"
        }
        else{
            computerChoice = "Scissors"
        }
    } 

    function playRound(computerChoice, playerChoice){
        if (computerChoice === "Rock"){
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML = "Oh no, it's a tie"
                    document.getElementById("userSelection").innerHTML = "You have picked Rock"
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Rock"
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML = "You win, Paper beats Rock";
                    document.getElementById("userSelection").innerHTML = "You have picked Paper"
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Rock"
                    upOrDown = 2;
                }
                else{
                    document.getElementById("result").innerHTML = "You lose, Rock beats Scissors";
                    document.getElementById("userSelection").innerHTML = "You have picked Scissors";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Rock";
                    upOrDown = 1;
                }}
        if (computerChoice === "Paper"){
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML = "You lose, Paper beats Rock";
                    document.getElementById("userSelection").innerHTML = "You have picked Rock";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Paper";
                    upOrDown = 1;
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML = "Oh no, its a tie";
                    document.getElementById("userSelection").innerHTML = "You have picked Paper";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Paper";
                }
                else{
                    document.getElementById("result").innerHTML = "You win, Scissors beats Paper";
                    document.getElementById("userSelection").innerHTML = "You have picked Scissors";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Paper";
                    upOrDown = 2;
                }}            
        if (computerChoice === "Scissors"){
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML ="You win, Rock beats Scissors";
                    document.getElementById("userSelection").innerHTML = "You have picked Rock";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Scissors";
                    upOrDown = 2;
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML ="You lose, Scissors beats Paper";
                    document.getElementById("userSelection").innerHTML = "You have picked Paper";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Scissors";
                    upOrDown = 1;
                }
                else{
                    document.getElementById("result").innerHTML ="Oh no, its a tie";
                    document.getElementById("userSelection").innerHTML = "You have picked Scissors";
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Scissors";
                }}
        }
function scoreTracking(){
    var cpuScore = 0;
    var playerScore = 0;
    document.getElementById("playerScoreTracker").innerHTML = `Your score is ${playerScore}`;
    document.getElementById("cpuScoreTracker").innerHTML = `The computer's score is ${cpuScore}`;
    if (playerScore < 5 && cpuScore < 5 ){
        if (upOrDown = 1){
            cpuScore += 1;
            return;
        }
        else if (upOrDown = 2){
            playerScore += 1;
            return;
        }
}}