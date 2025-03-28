let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generatecompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
};

const drawGame = (userchoice) => {
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compChoice = generatecompchoice();

    if (userchoice === compChoice) {
        drawGame(userchoice);
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
