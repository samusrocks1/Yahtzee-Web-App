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
//Declares variables for the upper row scores. upperCategory[0] corresponds to 1, etc.
let upperCategory = [0, 0, 0, 0, 0, 0]; 
let bonus = 0;
/*Declares variables for lower row. 
 * Slot 0 = Three of a kind.
 * Slot 1 = Four of a kind.
 * Slot 2 = Full House.
 * Slot 3 = Small Straight.
 * Slot 4 = Large Straight.
 * Slot 5 = Chance
 * Slot 6 = Yahtzee
 */
let lowerCategory = [0, 0, 0, 0, 0, 0, 0];

function useOnes() {
    if (die1 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die2 === 1){
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die3 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die4 === 1){
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die5 === 1){
        upperCategory[0] = upperCategory[0] + 1;
    }
    const onesBtn = document.getElementById("onesBtn");
    onesBtn.parentNode.removeChild(onesBtn);
    checkBonus();
}

function useTwos() {
    if (die1 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die2 === 2){
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die3 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die4 === 2){
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die5 === 2){
        upperCategory[1] = upperCategory[1] + 2;
    }
    const twosBtn = document.getElementById("twosBtn");
    twosBtn.parentNode.removeChild(twosBtn);
    checkBonus();
}

function useThrees() {
    if (die1 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die2 === 3){
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die3 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die4 === 3){
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die5 === 3){
        upperCategory[2] = upperCategory[2] + 3;
    }
    const threesBtn = document.getElementById("threesBtn");
    threesBtn.parentNode.removeChild(threesBtn);
    checkBonus();
}

function useFours() {
    if (die1 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die2 === 4){
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die3 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die4 === 4){
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die5 === 4){
        upperCategory[3] = upperCategory[3] + 4;
    }
    const foursBtn = document.getElementById("foursBtn");
    foursBtn.parentNode.removeChild(foursBtn);
    checkBonus();
}

function useFives() {
    if (die1 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die2 === 5){
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die3 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die4 === 5){
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die5 === 5){
        upperCategory[4] = upperCategory[4] + 5;
    }
    const fivesBtn = document.getElementById("fivesBtn");
    fivesBtn.parentNode.removeChild(fivesBtn);
    checkBonus();
}

function useSixes() {
    if (die1 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die2 === 6){
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die3 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die4 === 6){
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die5 === 6){
        upperCategory[5] = upperCategory[5] + 6;
    }
    const sixesBtn = document.getElementById("sixesBtn");
    sixesBtn.parentNode.removeChild(sixesBtn);
    checkBonus();
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
    lowerCategory[5] = die1 + die2 + die3 + die4 + die5;
    const chanceBtn = document.getElementById("chanceBtn");
    chanceBtn.parentNode.removeChild(chanceBtn);
}

function useYahtzee() {
    if (die1 === die2 && die2 === die3 && die3 === die4 && die4 === die5){
        lowerCategory[6] = lowerCategory[6] + 50;
    }
    else{
        const yahtzeeBtn = document.getElementById("yahtzeeBtn");
        yahtzeeBtn.parentNode.removeChild(yahtzeeBtn);
    }
}

function checkBonus(){
    let counter = 0;
    let subtotal = 0;
    do{
        subtotal = subtotal + upperCategory[counter];
    } while (counter < upperCategory.length);
    if (subtotal >= 63){
        bonus = 35;
    }
    else {
        bonus = 0;
    }
}

//Rolls the dice and outputs the results.                      
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