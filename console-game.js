function botRandomPick(){
    const botChoices = ["Rock", "Paper", "Scissor"]; 
    return botChoices[Math.floor(Math.random() * botChoices.length)];
}

let playerPoint = 0;
let botPoint = 0;

const pointDiv = document.getElementById('point');
const result = document.getElementById('result');

function updatePoint(){
    const pointDisplay  = `Player point - ${playerPoint} | Bot point - ${botPoint}`;
    pointDiv.textContent = pointDisplay;

    if (playerPoint === 5){
        result.textContent = "VICTORY";
        disableButtons();
    } else if (botPoint === 5){
        result.textContent = "DEFEAT";
        disableButtons();
    }
};

function playRound(playerSelection, botSelection){
    if (playerSelection === botSelection){
        return "It\'s a DRAW!";
    } else if (
        (playerSelection === "Rock" && botSelection === "Scissor") ||
        (playerSelection === "Paper" && botSelection === "Rock") ||
        (playerSelection === "Scissor" && botSelection === "Paper")
    ){
        playerPoint++;
        return `You WIN! ${playerSelection} beats ${botSelection}`;
    } else {
        botPoint++;
        return `You LOSE! ${botSelection} beats ${playerSelection}`;
    }
};

const rockButton = document.getElementById("rock");
rockButton.addEventListener('click', () => {
    botSelection = botRandomPick();
    const roundResult = playRound("Rock", botSelection);
    result.textContent = roundResult;
    updatePoint();
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener('click', () => {
    botSelection = botRandomPick();
    const roundResult = playRound("Paper", botSelection);
    result.textContent = roundResult;
    updatePoint();
});

const scissorButton = document.getElementById("scissor");
scissorButton.addEventListener('click', () => {
    botSelection = botRandomPick();
    const roundResult = playRound("Scissor", botSelection);
    result.textContent = roundResult;
    updatePoint();
});

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
};