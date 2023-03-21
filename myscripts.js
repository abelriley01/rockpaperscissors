let playerChoice;
let computerChoice;

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
                break;
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
                break;
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
            return 4;
        }

    }

    function game(){
        getComputerChoice();
        getPlayerChoice();
        let playerScore = 0;
        let cpuScore = 0;
        for (let i = 0; i < 5; i++){
           if (playerScore === 5){
                alert("you win!")
              }
              else if(cpuScore === 5){
                alert("You lose.")
              }
        counter = playRound();
        console.log(counter);
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
