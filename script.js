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

console.log(getComputerChoice());