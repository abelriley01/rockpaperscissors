let playerChoice;
let computerChoice;
var i = 0;
var txt = "This is an intro to a game that is ridiculously simple and needs no introduction, it's almost an insult to think you need to read this.... Seriously, why are you still reading?";
var speed = 50;

//typeWriter();

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
        switch(computerChoice){
            case "Rock":
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML = "Oh no, it's a tie"
                    document.getElementById("userSelection").innerHTML = "You have picked Rock"
                    document.getElementById("cpuSelection").innerHTML = "The computer picked Rock"
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML = "You win, Paper beats Rock";
                    
                }
                else{
                    document.getElementById("result").innerHTML = "You lose, Rock beats Scissors";
                    
                }
            case "Paper":
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML = "You lose, Paper beats Rock";
                    
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML = "Oh no, its a draw";
                    
                }
                else{
                    document.getElementById("result").innerHTML = "You win, Scissors beats Paper";
                    
                }
                
            case "Scissors":
                if (playerChoice === "rock"){
                    document.getElementById("result").innerHTML ="You win, Rock beats Scissors";
                    
                }
                else if (playerChoice === "paper"){
                    document.getElementById("result").innerHTML ="You lose, Scissors beats Paper";
                    
                }
                else{
                    document.getElementById("result").innerHTML ="Oh no, its a draw";
                    
                }
            default: 
            break;
        }

    }

    /*function scoreCheck(playerScore, cpuScore){
        console.log("You have " + playerScore + " points and the cpu has " + cpuScore + " points.")
    }   

    function game(){
        let playerScore = 0;
        let cpuScore = 0;
        for (let i = 0; i < 5; i++){
            getComputerChoice();
            getPlayerChoice();
            counter = playRound(computerChoice, playerChoice);
            switch (counter){
                case 1:
                    playerScore++;
                    scoreCheck(playerScore, cpuScore);
                    break;
                case 2:
                    cpuScore++;
                    scoreCheck(playerScore, cpuScore);
                    break;
                default:
                    scoreCheck(playerScore, cpuScore);
                    break;
              }
             if(i === 4){
                if (cpuScore > playerScore){
                    console.log("The computer wins.")
                    break;
                }
                else if (playerScore > cpuScore ){
                    console.log("Congratulations, you win!")
                    break;
                }
                else{
                    console.log("It's a tie, try again!")
                    break;
                }
             } 
            }
        }
*/