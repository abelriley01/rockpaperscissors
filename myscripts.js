let playerInput = prompt ("Choose either rock, paper or scissors");
let playerPick;
    function getPlayerChoice(){  
    let playerPick = playerInput.toLowerCase();
    switch(playerPick){
        case "rock":
            alert("you have picked Rock");
            break;
        case "paper":
            alert("you have picked paper");
            break;
        case "scissors":
            alert("you have picked scissors");
            break;
        default:
            alert("please type either rock, paper or scissors")
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

    function playRound(cpu, player){
        switch(cpu){
            case "Rock":
                if (player = "rock"){
                    alert ("Oh no, it's a draw");

                }
                else if (player = "paper"){
                    alert ("You win, Paper beats Rock");
                }
                else{
                    alert ("You lose, Rock beats Scissors");
                }
                break;
            case "Paper":
                if (player = "rock"){
                    alert ("You lose, Paper beats Rock");
                }
                else if (player = "paper"){
                    alert ("Oh no, its a draw");
                }
                else{
                    alert ("You win, Scissors beats Paper");
                }
                break;
            case "Scissors":
                if (player = "rock"){
                    alert ("You win, Rock beats Scissors");
                }
                else if (player = "paper"){
                    alert ("You lose, Scissors beats Paper");
                }
                else{
                    alert ("Oh no, its a draw");
                }
                break;
        }

    }
/*
    function playRound(computerSelection, playerPick){
        if(computerSelection == playerPick){
            alert("Oh no, it's a draw");
            }
            else if(computerSelection == "Rock" && playerPick == "scissors"){
            alert("You lose, Rock beats Scissors");
            return 0;
            }
            else if(computerSelection == "Rock" && playerPick == "paper"){
            alert("You win, Paper beats Rock");
            return 1;
            }
            else if(computerSelection == "Paper" && playerPick == "scissors"){
            alert("You win, Scissors beats Paper");
            return 1;
            }
            else if(computerSelection == "Paper" && playerPick == "rock"){
            alert("You lose, Paper beats Rock");
            return 0;
            }
            else if(computerSelection == "Scissors" && playerPick == "paper"){
            alert("You lose, Scissors beats Paper");
            return 0;
            }
            else if(computerSelection === "Scissors" && playerPick === "rock"){
            alert("You win, Rock beats Scissors");
            return 1;
            }
            else{
                alert("something went wrong")
            }
            }*/
        let computerChoice;
        getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(computerChoice);
        console.log(playerInput);
        console.log(playRound(playerPick, computerSelection));