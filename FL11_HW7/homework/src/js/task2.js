let gameStatus = confirm('Do you want to play a game?');
let randomNumber;
let userChooseNumber;
let userChoice;
let prize = 0;
let maxPrizeInitial = 100;
let maxPrize = 100;
let currentPrize = 100;
const DIVIDER = 2;
const MIN = 0;
let initialMax = 8;
let max = 8;
let stepForNumberRandom = 4;
let prizeStep = 2;
let secondAttempt = 2;
let thirdAttempt = 1;

if(!gameStatus){
    alert('You did not become a billionaire, but can.')
} else {

    do{
        let attempts = 3;
        currentPrize = maxPrize;
        randomNumber = MIN + Math.random() * (max + 1 - MIN);
        randomNumber = Math.floor(randomNumber);
        for (attempts; attempts > 0; attempts--) {
            attempts === secondAttempt ? currentPrize /= DIVIDER : attempts;
            attempts === thirdAttempt ? currentPrize /= DIVIDER : attempts;
            userChooseNumber = +prompt(`Choose a roulette pocket number from ${MIN} to ${max}
Attempts left:${attempts}
Total prize: ${prize}$
Possible prize on current attempt: ${currentPrize}$ `);
            if (randomNumber === userChooseNumber) {
                prize += currentPrize;
                userChoice = confirm(`Congratulation, you won!   
Your prize is: ${prize}$. Do you want to continue?`);
                if (!userChoice) {
                    alert(`Thank you for your participation. Your prize is: ${prize} $`);
                    userChoice = confirm('Do you want to play again?');
                    if(userChoice){
                        prize = 0;
                        maxPrize = maxPrizeInitial;
                        max = initialMax;
                        break;
                    } else {
                        break;
                    }
                } else {
                    max += stepForNumberRandom;
                    maxPrize *= prizeStep;
                    break;
                }
            } else {
                // Indicated 0 in the prize as the QA sessions answered that with 3 failures,
                // the prize for all games will lost.
                if(attempts === 1){
                    alert(`Thank you for your participation. Your prize is: 0 $`);
                    userChoice = confirm('Do you want to play again?');
                    if (userChoice) {
                        prize = 0;
                        maxPrize = maxPrizeInitial;
                        max = initialMax;
                        break;
                    }
                }
            }
        }
    }
    while (userChoice === true)

}