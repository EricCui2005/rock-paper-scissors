function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

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

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: ", "Choice")
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerWins++;
        } else if (result == -1) {
            computerWins++;
        } else if (result == 0) {
            draws++;
        }
    }
    console.log(`Player Wins: ${playerWins}\nComputer Wins: ${computerWins}\nDraws: ${draws}`);
}

playGame();