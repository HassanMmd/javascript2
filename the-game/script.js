let playerWins = 0;
let computerWins = 0;

const restartButton= document.createElement('button');
const playerParagraph = document.createElement('p');
const computerParagraph = document.createElement('p');
const resultParagraph = document.createElement('p');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const resultrButton = document.createElement('button');
const div = document.createElement('div');
let input;

rockButton.textContent = `Rock`;
paperButton.textContent = `Paper`;
scissorsButton.textContent = `Scissors`;
restartButton.textContent=`Restart`;

let btns = [rockButton, paperButton, scissorsButton];
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseenter', () => {
        btns[i].style.backgroundColor = 'aquamarine';
    })
    btns[i].addEventListener('mouseout', () => {
        btns[i].style.backgroundColor = 'darkcyan';
    })
}

function computerPlay() {
    let result;
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            result = `Paper`;
            break;
        case 1:
            result = `Rock`;
            break;
        case 2:
            result = `Scissors`;
            break;
    }
    computerParagraph.textContent = `${result}`;
    return result;
}

function playerPlay() {
    let result;
    switch (input) {
        case `paper`:
            result = `Paper`;
            break;
        case `rock`:
            result = `Rock`;
            break;
        case `scissors`:
            result = `Scissors`;
            break;
        default:
            result = `ERROR`
            break;
    }
    // if wrong value entered call the function again to get a correct value
    if (result == `ERROR`) {
        console.log(`You entered wrong value`)
        return playerPlay();
    }
    else {
        playerParagraph.textContent = `${result}`;
        return result;
    }
}

function playRound() {
    let result;
    switch (`${playerPlay()}${computerPlay()}`) {
        case `PaperRock`:
            result = `paper beats rock you win`;
            playerWins++;
            break;
        case `ScissorsRock`:
            result = `Scissors not beat rock you lose`;
            computerWins++;
            break;
        case `PaperScissors`:
            result = `paper not beat Scissors you lose`;
            computerWins++;
            break;
        case `ScissorsPaper`:
            result = `Scissors beats paper you win`;
            playerWins++;
            break;
        case `RockPaper`:
            result = `rock not beat paper you lose`;
            computerWins++;
            break;
        case `RockScissors`:
            result = `rock beats scissors you win`;
            playerWins++;
            break;
        case `PaperPaper`:
            result = `Paper equal paper`;
            break;
        case `RockRock`:
            result = `Rock equal Rock`;
            break;
        case `ScissorsScissors`:
            result = `Scissors equal Scissors`;
            break;
    }
    console.log(result);
    resultParagraph.textContent = `${result}`
    if (playerWins == 5) {
        div.textContent = `Congrats! You reach 5 points`;
        document.body.appendChild(restartButton);
        document.body.appendChild(div)
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }
    return result;
}

rockButton.addEventListener('click', () => {
    input = `rock`;
    playRound();
})
paperButton.addEventListener('click', () => {
    input = `paper`;
    playRound();
})
scissorsButton.addEventListener('click', () => {
    input = 'scissors';
    playRound();
})
restartButton.addEventListener('click',()=>{
    playerWins=0;
    rockButton.disabled=false;
    paperButton.disabled=false;
    scissorsButton.disabled=false;
    document.body.removeChild(div);
})

document.body.appendChild(rockButton)
document.body.appendChild(paperButton)
document.body.appendChild(scissorsButton)
document.body.appendChild(playerParagraph)
document.body.appendChild(computerParagraph)
document.body.appendChild(resultParagraph)