let player1Choice = null;
let player2Choice = null;
let player3Choice = null;

function playerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else if (player ===2){
        player2Choice = choice;
    }
    else
    {
        player3Choice = choice;
    }

    // Check if both players have made their choice
    if (player1Choice && player2Choice && player3Choice) {
        const result = determineWinner(player1Choice, player2Choice , player3Choice);
        document.getElementById('result').innerText = `Player 1 chose: ${player1Choice}\nPlayer 2 chose: ${player2Choice}\nplayer 3 chose: ${player3Choice}\nResult: ${result}`;

        // Reset choices for the next round
        player1Choice = null;
        player2Choice = null;
        player3Choice = null;
    }
}

function determineWinner(player1, player2 , player3) {
    if (player1 === player2 === player3) {
        return "It's a tie!";
    }
    if (
        (player1 === 'rock' && player2 === 'scissors' && player3 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock' && player3 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper' && player3 === ' paper')
    ) {
        return "Player 1 wins!";
    } else if ((player2 === 'rock' && player1 === 'scissors' && player3 === 'scissors') ||
    (player2 === 'paper' && player1 === 'rock' && player3 === 'rock') ||
    (player2 === 'scissors' && player1 === 'paper' && player3 === ' paper')){
        return "Player 2 wins!";
    }
    else
    {
        return "Player 3 wins !";
    }
}

