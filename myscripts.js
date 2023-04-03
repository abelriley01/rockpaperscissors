let playerChoice;
let computerChoice;
var i = 0;
var txt = "This is an intro to a game that is ridiculously simple and needs no introduction, it's almost an insult to think you need to read this ";
var speed = 50;

typeWriter();

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

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
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
                    console.log ("Oh no, it's a draw");
                    return 0;

                }
                else if (playerChoice === "paper"){
                    console.log ("You win, Paper beats Rock");
                    return 1;
                }
                else{
                    console.log ("You lose, Rock beats Scissors");
                    return 2;
                }
            case "Paper":
                if (playerChoice === "rock"){
                    console.log ("You lose, Paper beats Rock");
                    return 2;
                }
                else if (playerChoice === "paper"){
                    console.log ("Oh no, its a draw");
                    return 0;
                }
                else{
                    console.log ("You win, Scissors beats Paper");
                    return 1;
                }
                
            case "Scissors":
                if (playerChoice === "rock"){
                    console.log ("You win, Rock beats Scissors");
                    return 1;
                }
                else if (playerChoice === "paper"){
                    console.log ("You lose, Scissors beats Paper");
                    return 2;
                }
                else{
                    console.log ("Oh no, its a draw");
                    return 0;
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