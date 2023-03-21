let playerInput = prompt ("Choose either rock, paper or scissors");
let playerPick = playerInput.toLowerCase();
let computerChoice;
let playerScore = 0;
let cpuScore = 0;
getComputerChoice();
console.log (playerPick);
console.log (computerChoice);
console.log (playRound(computerChoice,playerPick));
console.log (playerScore);
console.log (cpuScore);
game();

    
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
                    //console.log ("Oh no, it's a draw");
                    return 0;

                }
                else if (playerPick = "paper"){
                    //console.log ("You win, Paper beats Rock");
                    return 1;
                }
                else{
                    //console.log ("You lose, Rock beats Scissors");
                    return 2;
                }
                break;
            case "Paper":
                if (playerPick = "rock"){
                    //console.log ("You lose, Paper beats Rock");
                    return 2;
                }
                else if (playerPick = "paper"){
                    //console.log ("Oh no, its a draw");
                    return 0;
                }
                else{
                    //console.log ("You win, Scissors beats Paper");
                    return 1;
                }
                break;
            case "Scissors":
                if (playerPick = "rock"){
                    //console.log ("You win, Rock beats Scissors");
                    return 1;
                }
                else if (playerPick = "paper"){
                    //console.log ("You lose, Scissors beats Paper");
                    return 2;
                }
                else{
                    //console.log ("Oh no, its a draw");
                    return 0;
                }
                break;
        }

    }

    function game(){
        for (let i = 0; i < 5; i++){
            if (playerScore = 5){
                alert("you win!")
              }
              else if(cpuScore = 5){
                alert("You lose.")
              }
            let counter = playRound(); 
            console.log (counter);
            switch (counter){
                case 1:
                    ++playerScore;
                    break;
                case 2:
                    ++cpuScore;
                    break;
                default:
                    break;
            }

        }
    }
