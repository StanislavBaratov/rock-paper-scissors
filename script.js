const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INITIAL_TEXT = 'Press the play button to play Rock-Paper-Scissors with PC';
const BUTTONS = ['ROCK', 'PAPER', 'SCISSORS'];
const SCORE_TO_WIN = 5;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let choice = null;
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt('Input your choice. Available variants: "rock", "paper" or "scissors"', "rock").toLowerCase();
    }
    
    switch (choice) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
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

function addRPCButtons() {
    const controls = document.querySelector('.controls');
    const toolbar = document.createElement('div');
    toolbar.setAttribute('class', 'toolbar');

    for (let i = 0; i < 3; ++i) {
        const button = document.createElement('button');
        
        button.setAttribute('type', 'button');
        button.setAttribute('id', i);
        button.textContent = BUTTONS[i];
        
        toolbar.appendChild(button);
        controls.appendChild(toolbar);
    }

}
//Устанавливаем кнопку play и текст приглашения к игре
function initializeGameContainer() {
    const gameContainer = document.querySelector('.game-container');
    const statusBar = document.querySelector('#statusbar');

    const playButton = addPlayButton(gameContainer);
    playButton.addEventListener('click', addRPCButtons);

    statusBar.textContent = INITIAL_TEXT;
}

function playGame() {
    let humanSelection = null;
    let computerSelection = null;

    for (let i = 0; i < ROUNDS; ++i) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert(`Results
        Computer: ${computerScore}. 
        You: ${humanScore}`);
}

initializeGameContainer();
