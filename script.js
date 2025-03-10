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

function getHumanChoice(button) {
    return parseInt(button.getAttribute('id'));
}

function removeRPCButtons() {
    document.querySelectorAll('button').forEach((item) => item.remove());
}

function removeScoreBoard() {
    document.querySelector('#scoreboard').remove();
}

function removeRestartButton() {
    document.querySelector('#restart').remove();
}

function restartGame() {
    removeScoreBoard();
    removeRestartButton();
    initializeGameContainer();
}

function addRestartButton() {
    const restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'restart');
    restartButton.textContent = 'Restart game';
    restartButton.addEventListener('click', restartGame);

    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(restartButton);

}

function stopGame() {
    const humanScore = getHumanScore();
    const computerScore = getComputerScore();
    const statusBar = document.querySelector('#statusbar');

    removeRPCButtons();
    addRestartButton();
    statusBar.textContent = humanScore > computerScore ? 'You won!' : 'Computer won!';


}

function updateScore(humanChoice, computerChoice) {
    let computerScore = getComputerScore();
    let humanScore = getHumanScore();
    const statusBar = document.querySelector('#statusbar');
    const humanMove = BUTTONS[humanChoice];
    const computerMove = BUTTONS[computerChoice];
    const moves = `Your move: ${humanMove}. PC's move: ${computerMove}`;

    switch ((humanChoice - computerChoice + 3) % 3) {
        case 0:
            statusBar.textContent = 'Draw! ' + moves;
            break;
        case 1:
            statusBar.textContent = 'You won! ' + moves;
            humanScore++;
            break;
        case 2:
            statusBar.textContent = 'Computer won! ' + moves;
            computerScore++;
            break;
    }

    scoreBoard.textContent = `${humanScore}:${computerScore}`;
    if (humanScore === SCORE_TO_WIN || computerScore === SCORE_TO_WIN) {
        stopGame();
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

function getComputerScore() {
    scoreBoard = document.querySelector('#scoreboard');
    return parseInt(scoreBoard.textContent.split(':')[1]);
}

function getHumanScore() {
    scoreBoard = document.querySelector('#scoreboard');
    return parseInt(scoreBoard.textContent.split(':')[0]);
}

function playRound(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(event.target);
    updateScore(humanChoice, computerChoice);
}

function addRPCButtons() {
    const toolbar = document.querySelector('.toolbar');

    for (let i = 0; i < 3; ++i) {
        const button = document.createElement('button');
        
        button.setAttribute('type', 'button');
        button.setAttribute('id', i);
        button.textContent = BUTTONS[i];
        button.addEventListener('click', playRound);
        
        toolbar.appendChild(button);   
    }
}

function addScoreBoard() {
    const gameContainer = document.querySelector('.game-container');
    const scoreBoard = document.createElement('div');

    scoreBoard.setAttribute('id', 'scoreboard');
    scoreBoard.textContent = '0:0';
    gameContainer.appendChild(scoreBoard);

    return scoreBoard;
}

function startGame() {
    removePlayButton();
    addRPCButtons();
    setFirstMoveText();
    addScoreBoard();
}

//Устанавливаем кнопку play и текст приглашения к игре
function initializeGameContainer() {
    const gameContainer = document.querySelector('.game-container');
    const statusBar = document.querySelector('#statusbar');

    const playButton = addPlayButton(gameContainer);
    playButton.addEventListener('click', startGame);

    statusBar.textContent = INITIAL_TEXT;
}

initializeGameContainer();
