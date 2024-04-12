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
            updateResult("Draw!");
            return 0;
        } else if (computerSelection == "Paper") {
            updateResult("You lose! Paper beats Rock!");
            return -1;
        } else if (computerSelection == "Scissors") {
            updateResult("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            updateResult("You win! Paper beats Rock!");
            return 1;
        } else if (computerSelection == "Paper") {
            updateResult("Draw");
            return 0;
        } else if (computerSelection == "Scissors") {
            updateResult("You lose! Scissors beats Paper!");
            return -1;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            updateResult("You lose! Rock beats Scissors!");
            return -1;
        } else if (computerSelection == "Paper") {
            updateResult("You win! Scissors beats Paper!");
            return 1;
        } else if (computerSelection == "Scissors") {
            updateResult("Draw!");
            return 0;
        }
    }
}

let playerWins = 0;
let computerWins = 0;
let draws = 0;

let selections = document.querySelector("#selections");
selections.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);
    let result = NaN;

    switch(target.id) {
        case 'rock':
            updateScore(playRound('Rock', getComputerChoice()));
            break;
        case 'paper':

            updateScore(playRound('Paper', getComputerChoice()));
            break;
        case 'scissors':
            updateScore(playRound('Scissors', getComputerChoice()));
            break;
    }
});

// Function to let the player know the result of their round
function updateResult(resultMessage) {
    let resultText = document.querySelector("#result-text");
    resultText.textContent = resultMessage;
}

// Function to update the running score of games won
function updateScore(result) {
    let scoreText = document.querySelector("#score-text");
    switch(result) {
        case 1:
            playerWins++;
            break;
        case -1:
            computerWins++;
            break;
        case 0:
            draws++;
    }
    let text = `Player Wins: ${playerWins} Computer Wins: ${computerWins} Draws: ${draws}`;
    scoreText.textContent = text;
}

