function getComputerChoice (){
    const randomPick = Math.random();
    let pick;

    if (randomPick < 0.3){
        pick = "Rock";
    }
    else if (randomPick < 0.6){
        pick = "Paper";
    }
    else {
        pick = "Scissor";
    }

    return pick;
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    let playResult;

    if (playerSelection === "rock" && computerSelection === "scissor"){
        playResult = "You Win! Rock beats Scissor.";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        playResult = "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        playResult = "You Lose! Paper beats Rock.";
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        playResult = "You Win! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        playResult = "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        playResult = "You Lose! Scissor beats Paper.";
    }
    
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        playResult = "You Win! Scissor beats Paper.";
    } else if (playerSelection === "scissor" && computerSelection === "scissor"){
        playResult = "Draw!";
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
        playResult = "You Lose! Rock beats Scissor.";
    }

    else {
        playResult = "Pick is not available";
    }

    return playResult;
}

function game (){
    let roundWinner = 0;
    let roundLoser = 0;
    let gameResult;
    
    while (true){
        const playerSelection = prompt("Your choice?");
        const computerSelection = getComputerChoice();

        console.log(computerSelection);

        let roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult.includes("You Win!")){
            roundWinner++;
            console.log(roundWinner + " Win");
            console.log(playRound(playerSelection, computerSelection));
        } else if (roundResult.includes("You Lose!")){
            roundLoser++;
            console.log(roundLoser + " Lose");
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log(playRound(playerSelection, computerSelection));
        }
        
        if (roundWinner === 3){
            gameResult = "VICTORY!";
            break;
        } else if (roundLoser === 3){
            gameResult = "DEFEAT! Bot Win.";
            break;
        }
    }

    console.log(gameResult);
}

game();