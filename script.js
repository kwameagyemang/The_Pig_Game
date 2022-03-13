'use strict';
// selctiing elements 
const score0El = document.querySelector('#score--0');
// getElementByID another way of selecting ids
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rollling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. genreating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)

    //2. display dice
    diceEl.classList.remove('hidden');
    // this displays image according to number rolled on the dice
    diceEl.src = `dice-${dice}.png`;



    //3. check for rolled 1: if true, switch to next player 
})