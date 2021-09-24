/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Global Variables
let die1 = 0;
let die2 = 0;
let die3 = 0;
let die4 = 0;
let die5 = 0;
let die1Hold = false;
let die2Hold = false;
let die3Hold = false;
let die4Hold = false;
let die5Hold = false;
let roll = 1;
let round = 1;

function game() {

}

function useOnes() {

}

function useTwos() {

}

function useThrees() {

}

function useFours() {

}

function useFives() {

}

function useSixes() {

}

function useThreeOfAKind() {

}

function useFourOfAKind() {

}

function useFullHouse() {

}

function useSmallStraight() {

}

function useLargeStraight() {

}

function useChance() {

}

function useYahtzee() {

}

function rollDice() {
    //Rolls the first die if the player is not holding it.
    if (die1Hold === false) {
        die1 = Math.floor(Math.random() * 6) + 1;
    }

    //Rolls the second die if the player is not holding it.
    if (die2Hold === false) {
        die2 = Math.floor(Math.random() * 6) + 1;
    }

    //Rolls the third die if the player is not holding it.
    if (die3Hold === false) {
        die3 = Math.floor(Math.random() * 6) + 1;
    }

    //Rolls the fourth die if the player is not holding it.
    if (die4Hold === false) {
        die4 = Math.floor(Math.random() * 6) + 1;
    }

    //Rolls the fifth die if the player is not holding it.
    if (die5Hold === false) {
        die5 = Math.floor(Math.random() * 6) + 1;
    }
    outputDice();
    roll++;
    const roundText = document.getElementById("roundText");
    roundText.textContent = "Round: " + round + ", Roll: " + roll;
}

//Outputs the dice for the player to see.
function outputDice() {
    const diceOne = document.getElementById("diceOne");
    const diceTwo = document.getElementById('diceTwo');
    const diceThree = document.getElementById('diceThree');
    const diceFour = document.getElementById('diceFour');
    const diceFive = document.getElementById('diceFive');

    //Shows the player the correct image for the first die.
    if (die1 === 1) {
        diceOne.src = "images/1.png";
    } else if (die1 === 2) {
        diceOne.src = "images/2.png";
    } else if (die1 === 3) {
        diceOne.src = "images/3.png";
    } else if (die1 === 4) {
        diceOne.src = "images/4.png";
    } else if (die1 === 5) {
        diceOne.src = "images/5.png";
    } else if (die1 === 6) {
        diceOne.src = "images/6.png";
    } else {
        console.log('error');
    }

    //Second die.
    if (die2 === 1) {
        diceTwo.src = "images/1.png";
    } else if (die2 === 2) {
        diceTwo.src = "images/2.png";
    } else if (die2 === 3) {
        diceTwo.src = "images/3.png";
    } else if (die2 === 4) {
        diceTwo.src = "images/4.png";
    } else if (die2 === 5) {
        diceTwo.src = "images/5.png";
    } else if (die2 === 6) {
        diceTwo.src = "images/6.png";
    } else {
        console.log('error');
    }

    //Third die.
    if (die3 === 1) {
        diceThree.src = "images/1.png";
    } else if (die3 === 2) {
        diceThree.src = "images/2.png";
    } else if (die3 === 3) {
        diceThree.src = "images/3.png";
    } else if (die3 === 4) {
        diceThree.src = "images/4.png";
    } else if (die3 === 5) {
        diceThree.src = "images/5.png";
    } else if (die3 === 6) {
        diceThree.src = "images/6.png";
    } else {
        console.log('error');
    }

    //Fourth die.
    if (die4 === 1) {
        diceFour.src = "images/1.png";
    } else if (die4 === 2) {
        diceFour.src = "images/2.png";
    } else if (die4 === 3) {
        diceFour.src = "images/3.png";
    } else if (die4 === 4) {
        diceFour.src = "images/4.png";
    } else if (die4 === 5) {
        diceFour.src = "images/5.png";
    } else if (die4 === 6) {
        diceFour.src = "images/6.png";
    } else {
        console.log('error');
    }

    //Fifth die.
    if (die5 === 1) {
        diceFive.src = "images/1.png";
    } else if (die5 === 2) {
        diceFive.src = "images/2.png";
    } else if (die5 === 3) {
        diceFive.src = "images/3.png";
    } else if (die5 === 4) {
        diceFive.src = "images/4.png";
    } else if (die5 === 5) {
        diceFive.src = "images/5.png";
    } else if (die5 === 6) {
        diceFive.src = "images/6.png";
    } else {
        console.log('error');
    }
}