let options = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

let computerMoveText = document.getElementById("computerMove");
let scoreText = document.getElementById("score");
let roundResultText = document.getElementById("roundResult");
let gameResultText = document.getElementById("gameResult");


function getComputerChoice(){
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, computerMove){
    if (playerMove == computerMove )return "tie";
    if (playerMove == "rock" && computerMove == "paper") return "computer";
    if (playerMove == "rock" && computerMove == "scissors") return "player";
    if (playerMove == "paper" && computerMove == "rock") return "player";
    if (playerMove == "paper" && computerMove == "scissors") return "computer";
    if (playerMove == "scissors" && computerMove == "paper") return "player";
    if (playerMove == "scissors" && computerMove == "rock") return "computer";
}


function getResults (e){
    // console.log(e.target);
    let playerMove = e.target.id;
    let computerMove = getComputerChoice();
    computerMoveText.innerText = "Computer's move: " + computerMove;
    let results = playRound(playerMove, computerMove);

    switch (results){
        case "tie":
            console.log("It's a tie");
            roundResultText.innerText = "It's a tie";
            break;
        case "player":
            console.log("You win")
            roundResultText.innerText = "You win this round";
            playerPoints++;
            break;
        case "computer":
            console.log("Computer wins");
            roundResultText.innerText = "Computer wins this round";
            computerPoints++;
            break;
        default:
            console.log("?????");
        
    }

    scoreText.innerText = `${playerPoints} : ${computerPoints}`;

    if (playerPoints == 5){
        gameResultText.innerText = "YOU WIN THE GAME";
        images.forEach(image => image.removeEventListener("click", getResults));
    }

    if (computerPoints == 5){
        gameResultText.innerText = "Computer wins the game";
        images.forEach(image => image.removeEventListener("click", getResults));
    }
}


let images = document.querySelectorAll("img");
images.forEach(image => { image.addEventListener("click", getResults)});

