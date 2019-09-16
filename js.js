let compWins = 0;
let playerWins = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let results = document.getElementById('disp');
let score = document.getElementById('score');


paper.addEventListener('click', function () {
    let computerMove = computerPlay();
    let userChoice = "PAPER";
    playRound(userChoice, computerMove);
})

scissors.addEventListener('click', function () {
    let computerMove = computerPlay();
    let userChoice = "PAPER";
    playRound(userChoice, computerMove);
})

rock.addEventListener('click', function () {
    let computerMove = computerPlay();
    let userChoice = "ROCK";
    playRound(userChoice, computerMove);
})

function computerPlay() {
    const MOVES = ["ROCK", "PAPER", "SCISSORS"];
    return (MOVES[Math.floor(Math.random() * 3)]);
}



function result(userChoice, computerMove) {
    switch (userChoice) {
        case "ROCK":
            if (computerMove == "ROCK") {
                return 1;
            }
            else if (computerMove == "PAPER") {
                return 0;
            }
            else {
                return 2;
            }

        case "PAPER":
            if (computerMove == "ROCK") {
                return 2;
            }
            else if (computerMove == "PAPER") {
                return 1;
            }
            else {
                return 0;
            }

        case "SCISSORS":
            if (computerMove == "ROCK") {
                return 0;
            }
            else if (computerMove == "PAPER") {
                return 2;
            }
            else {
                return 1;
            }
    }

}



function decideWin(outcome, userChoice, computerMove) {
    if (outcome == 0) {
        compWins++;
        results.textContent = `You lose! ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1).toLowerCase()}
        beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()}`;
    }

    else if (outcome == 1) {
        results.textContent = `It's a tie!`;
    }

    else if (outcome == 2) {
        playerWins++;
        results.textContent = `winner! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()}
        beats ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1).toLowerCase()}`;
    }
}



function displayScore(playerWins, compWins) {
    score.textContent = `You:  ${playerWins} , Computer: ${compWins}`;
}



function winner(WINNING_SCORE, playerWins, compWins) {
    if (playerWins == WINNING_SCORE) {
        results.textContent = `CONGRATULATIONS, YOU WON!`;
        score.textContent = `Final score -  You:  ${playerWins} , Computer: ${compWins}`;
        playerWins = 0;
        compWins = 0;
    }
    else if (compWins == WINNING_SCORE) {
        results.textContent = `SORRY, YOU LOSE!`;
        score.textContent = `Final score -  You:  ${playerWins} , Computer: ${compWins}`;
        playerWins = 0;
        compWins = 0;
    }

}

function playRound(userChoice, computerMove) {
    outcome = result(userChoice, computerMove);
    decideWin(outcome, userChoice, computerMove);
    displayScore(playerWins, compWins);
   
}











