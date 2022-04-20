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

let result;
let winns = 0;
let counter = 0;

function playRound(playerSelection) {
    counter++;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        result = 'You tied!';
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = 'You lost!';
        } else {
            result = 'You won!';
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            result = 'You lost!';
        } else {
            result = 'You won!';
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = 'You lost!';
        } else {
            result = 'You won!';
        }
    }
    document.getElementById('result').textContent = result;
    if (result == 'You won!') {
        winns++;
    }
    if (counter % 5 == 0 && counter != 0) {
        if (winns >= 3) {
            document.getElementById('winner').textContent = 'You won the game!';
        } else {
            document.getElementById('winner').textContent = 'You lost the game!';
        }
        winns = 0;
        counter = 0;
    } else {
        document.getElementById('winner').textContent = `Round: "${counter}"`;
    }

}


console.log(`You won ${counter} times.`);

window.onload = function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });
}