function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'You tied!';
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You lost!';
        } else {
            return 'You won!';
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'You lost!';
        } else {
            return 'You won!';
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lost!';
        } else {
            return 'You won!';
        }
    }
}

function playerSelection() {
    let input = prompt('Please select rock, paper, or scissors.');
    return String(input).toLowerCase();
}

function computerPlay() {
    var computerSelection = Math.random();
    if (computerSelection < 0.34) {
        return 'rock';
    } else if (computerSelection <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let playersSelection;
let computerSelection;
let result;
let counter;

for (let i = 0; i < 5; i++) {
    playersSelection = playerSelection();
    computerSelection = computerPlay();
    result = playRound(playersSelection, computerSelection)
    console.log(result);
    if (result == 'You won!') {
        counter++;
    }
}
console.log(`You won ${counter} times.`);