let playerChoice;
let computerChoice;

game();

    function getPlayerChoice(){
        let playerInput = prompt ("Choose either rock, paper or scissors");
        playerChoice = playerInput.toLowerCase();
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

    function scoreCheck(playerScore, cpuScore){
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
                    scoreCheck();
                    break;
                case 2:
                    cpuScore++;
                    scoreCheck();
                    break;
                default:
                    scoreCheck();
                    break;
              }
            }
        }
