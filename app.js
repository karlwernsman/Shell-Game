/* Imports */
//import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; //'guess' or 'results'
let guess = ''; //'guess-1', 'guess-2', or 'guess-3'
let pearl = '';

/* Actions */
function loadPage() {
    displayShells();
}

function playAgain() {
    gameState = 'guess';
    loadPage();
}

//const choices = ['pearl-1', 'pearl-2', 'pearl-3'];
// }

/* Components */

/* Scoreboard */

/* Guess */
// get DOM
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

//const display1 = document.getElementById('display-1');
//const display2 = document.getElementById('display-2');
//const display3 = document.getElementById('display-3');

const guessDiv = document.getElementById('guesses');
const resultsDiv = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

// display
function displayShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    if (gameState === 'guess') {
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        resultsDiv.classList.add('hidden');
    } else {
        if (guess === 'guess-1') {
            shell1.classList.add('reveal');
            pearl1.classList.remove('hidden');
            resultsDiv.classList.remove('hidden');
        }
        if (guess === 'guess-2') {
            shell2.classList.add('reveal');
            pearl2.classList.remove('hidden');
            resultsDiv.classList.remove('hidden');
        }
        if (guess === 'guess-3') {
            shell3.classList.add('reveal');
            pearl3.classList.remove('hidden');
            resultsDiv.classList.remove('hidden');
        } else {
            guessDiv.classList.add('hidden');
        }
    }
}
// event listeners
guess1.addEventListener('click', () => {
    guess = 'guess-1';
    pearl;
    gameState = 'results';
    displayShells(shell1);
});

guess2.addEventListener('click', () => {
    guess = 'guess-2';
    pearl;
    gameState = 'results';
    displayShells(shell2);
});
guess3.addEventListener('click', () => {
    guess = 'guess-3';
    pearl;
    gameState = 'results';
    displayShells(shell3);
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
