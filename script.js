// Returns a random computer choice for a game of rock, paper, scissors
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function that plays a round of rock paper scissors and returns a value 
// based on whether the player or computer wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("Draw!");
            return 0;
        } else if (computerSelection == "Paper") {
            console.log("You lose! Paper beats Rock!");
            return -1;
        } else if (computerSelection == "Scissors") {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You win! Paper beats Rock!");
            return 1;
        } else if (computerSelection == "Paper") {
            console.log("Draw");
            return 0;
        } else if (computerSelection == "Scissors") {
            console.log("You lose! Scissors beats Paper!");
            return -1;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("You lose! Rock beats Scissors!");
            return -1;
        } else if (computerSelection == "Paper") {
            console.log("You win! Scissors beats Paper!");
            return 1;
        } else if (computerSelection == "Scissors") {
            console.log("Draw!");
            return 0;
        }
    }
}

let playerWins = 0;
let computerWins = 0;

let selections = document.querySelector("#selections");
selections.addEventListener('click', (event) => {
    let target = event.target;
    let result = NaN;

    switch(target.id) {
        case 'rock':
            result = playRound('Rock', getComputerChoice());
        case 'paper':
            result = playRound('Paper', getComputerChoice());
        case 'scissors':
            result = playRound('Scissors', getComputerChoice());
    }
});

// Function to let the player know the result of their round
function updateResult(resultMessage) {

}

// Function to update the running score of games won
function updateScore(result) {

}

