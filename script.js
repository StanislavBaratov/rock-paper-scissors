function getComputerChoice() {
    const choice = Math.random() * 3;
    if (choice <= 1) {
        return "rock";
    } else if (choice <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = null;
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt('Input your choice. Available variants: "rock", "paper" or "scissors"', "rock");
    }
    return choice;

}


console.log(getComputerChoice());
console.log(getHumanChoice());