let options = ["rock", "paper", "scissors"];

let computerMoveText = document.getElementById("computerMove")
let scoreText = document.getElementById("score")
let roundResultText = document.getElementById("roundResult")
let gameResultText = document.getElementById("gameResult")

function getComputerChoice(){
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerMove, computerMove){
    playerMove = playerMove.toLowerCase();
    if (playerMove == computerMove ){
        return "tie"
    }
    if (playerMove == "rock" && computerMove == "paper") return "computer";
    if (playerMove == "rock" && computerMove == "scissors") return "player";

    if (playerMove == "paper" && computerMove == "rock") return "player";
    if (playerMove == "paper" && computerMove == "scissors") return "computer";

    if (playerMove == "scissors" && computerMove == "paper") return "player";
    if (playerMove == "scissors" && computerMove == "rock") return "computer";
}

let playerPoints = 0;
let computerPoints = 0;

function clickedRock(){
    let playerMove = "rock";
    let computerMove = getComputerChoice();
    computerMoveText.innerHTML = computerMove;
    getResults(playerMove, computerMove);
}

function clickedPaper(){
    let playerMove = "paper";
    let computerMove = getComputerChoice();
    computerMoveText.innerHTML = computerMove;
    getResults(playerMove, computerMove);
}


function clickedScissors(){
    let playerMove = "scissors";
    let computerMove = getComputerChoice();
    computerMoveText.innerHTML = computerMove;
    getResults(playerMove, computerMove);
}


function getResults(playerMove, computerMove){

    let results = playRound(playerMove, computerMove);

    switch (results){
        case "tie":
            console.log("It's a tie");
            roundResultText.innerHTML = "It's a tie";
            break;
        case "player":
            console.log("You win")
            roundResultText.innerHTML = "You win";
            playerPoints++;
            break;
        case "computer":
            console.log("Computer wins");
            roundResultText.innerHTML = "Computer wins";
            computerPoints++;
            break;
        default:
            console.log("?????");
        
    }

    scoreText.innerHTML = `${playerPoints} : ${computerPoints}`;

    if (playerPoints == 5){
        gameResultText.innerHTML = "YOU WIN THE GAME";
    }

    if (computerPoints == 5){
        gameResultText.innerHTML = "Computer wins the game";
    }
}


