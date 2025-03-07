const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INITIAL_TEXT = 'Press the play button to play Rock-Paper-Scissors with PC';
const BUTTONS = ['ROCK', 'PAPER', 'SCISSORS'];
const SCORE_TO_WIN = 5;
const ROUND_RESULTS = ['Draw.', 'Computer win!', 'You win!'];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(event) {
    let choice = event.target.getAttribute('id');
    switch (choice) {
        case "ROCK":
            return 0;
            break;
        case "PAPER":
            return 1;
            break;
        case "SCISSORS":
            return 2;
            break;
    }
}

function updateScore(humanChoice, computerChoice) {
    switch ((humanChoice - computerChoice + 3) % 3) {
        case 0:
            alert("Draw");
            break;
        case 1:
            alert("Computer win");
            computerScore++;
            break;
        case 2:
            alert("You win!");
            humanScore++;
            break;
    }
}

function addPlayButton(container) {
    const playButton = document.createElement('div');
    const pipkaRight = document.createElement('div');

    playButton.setAttribute('id', 'play');
    pipkaRight.setAttribute('id', 'pipka-right');

    playButton.appendChild(pipkaRight);
    container.appendChild(playButton);
    return playButton;
}

function removePlayButton() {
    document.querySelector('#play').remove();
}

function setFirstMoveText() {
    document.querySelector('#statusbar').textContent = 'Your move';
}

function addRPCButtons() {
    const controls = document.querySelector('.controls');
    const toolbar = document.createElement('div');
    toolbar.setAttribute('class', 'toolbar');

    for (let i = 0; i < 3; ++i) {
        const button = document.createElement('button');
        
        button.setAttribute('type', 'button');
        button.setAttribute('id', i);
        button.textContent = BUTTONS[i];
        button.addEventListener('click', getHumanChoice);
        
        toolbar.appendChild(button);   
    }
    
    controls.appendChild(toolbar);

}

function addScoreBoard() {
    const gameContainer = document.querySelector('.game-container');
    const scoreBoard = document.createElement('div');

    scoreBoard.setAttribute('id', 'scoreboard');
    scoreBoard.textContent = '0:0';
    gameContainer.appendChild(scoreBoard);

    return scoreBoard;
}

//Устанавливаем кнопку play и текст приглашения к игре
function initializeGameContainer() {
    const gameContainer = document.querySelector('.game-container');
    const statusBar = document.querySelector('#statusbar');

    const playButton = addPlayButton(gameContainer);
    playButton.addEventListener('click', playGame);

    statusBar.textContent = INITIAL_TEXT;
}

function playGame() {
    removePlayButton();
    addRPCButtons();
    setFirstMoveText();
    const scoreBoard = addScoreBoard();

    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = null;
    let computerSelection = null;

    alert(`Results
        Computer: ${computerScore}. 
        You: ${humanScore}`);
}

initializeGameContainer();
