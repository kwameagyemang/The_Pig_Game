'use strict';
// selctiing elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
// getElementByID another way of selecting ids
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// rollling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. genreating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)

    //2. display dice
    diceEl.classList.remove('hidden');
    // this displays image according to number rolled on the dice
    diceEl.src = `dice-${dice}.png`;
    
    //3. check for rolled 1
    if (dice !== 1) {
        // Add dice to current score
        //same as currentScore = currentScore + dice
        currentScore += dice;
        // showing active player scores belong to
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }else {
        // switch to next player
        // if activePlayer is 0 then switch Player to 1 else 0
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        player0El.classList.toggle()

    }

    

})