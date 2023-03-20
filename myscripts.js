let playerInput = prompt ("Choose either rock, paper or scissors");
let playerPick;
let computerChoice;
getPlayerChoice();
getComputerChoice();

    
   function getPlayerChoice(){  
        let playerPick = playerInput.toLowerCase();
        switch(playerPick){
            case "rock":
                alert("you have picked Rock");
                break;
            case "paper":
                alert("you have picked Paper");
                break;
            case "scissors":
                alert("you have picked Scissors");
                break;
            default:
                alert("please type either rock, paper or scissors");
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

    function playRound(computerChoice, playerPick){
        switch(computerChoice){
            case "Rock":
                if (playerPick = "rock"){
                    return "Oh no, it's a draw";

                }
                else if (playerPick = "paper"){
                    return "You win, Paper beats Rock";
                }
                else{
                    return "You lose, Rock beats Scissors";
                }
                break;
            case "Paper":
                if (playerPick = "rock"){
                    return "You lose, Paper beats Rock";
                }
                else if (playerPick = "paper"){
                    return "Oh no, its a draw";
                }
                else{
                    return "You win, Scissors beats Paper";
                }
                break;
            case "Scissors":
                if (playerPick = "rock"){
                    return "You win, Rock beats Scissors";
                }
                else if (playerPick = "paper"){
                    return "You lose, Scissors beats Paper";
                }
                else{
                    return "Oh no, its a draw";
                }
                break;
        }

    }
    console.log(playRound(computerChoice, playerPick));