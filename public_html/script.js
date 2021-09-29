/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Global Variables
let die1 = Math.floor(Math.random()*6)+1;
let die2 = Math.floor(Math.random()*6)+1;
let die3 = Math.floor(Math.random()*6)+1;
let die4 = Math.floor(Math.random()*6)+1;
let die5 = Math.floor(Math.random()*6)+1;
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
let upperTotal = 0;
let lowerTotal = 0;
let grandTotal = 0;
let gameCounter = 0;
outputDice();

function useOnes() {
    if (die1 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die2 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die3 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die4 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    if (die5 === 1) {
        upperCategory[0] = upperCategory[0] + 1;
    }
    const onesBtn = document.getElementById("onesBtn");
    onesBtn.parentNode.removeChild(onesBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useTwos() {
    if (die1 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die2 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die3 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die4 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    if (die5 === 2) {
        upperCategory[1] = upperCategory[1] + 2;
    }
    const twosBtn = document.getElementById("twosBtn");
    twosBtn.parentNode.removeChild(twosBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useThrees() {
    if (die1 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die2 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die3 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die4 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    if (die5 === 3) {
        upperCategory[2] = upperCategory[2] + 3;
    }
    const threesBtn = document.getElementById("threesBtn");
    threesBtn.parentNode.removeChild(threesBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useFours() {
    if (die1 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die2 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die3 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die4 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    if (die5 === 4) {
        upperCategory[3] = upperCategory[3] + 4;
    }
    const foursBtn = document.getElementById("foursBtn");
    foursBtn.parentNode.removeChild(foursBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useFives() {
    if (die1 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die2 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die3 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die4 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    if (die5 === 5) {
        upperCategory[4] = upperCategory[4] + 5;
    }
    const fivesBtn = document.getElementById("fivesBtn");
    fivesBtn.parentNode.removeChild(fivesBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useSixes() {
    if (die1 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die2 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die3 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die4 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    if (die5 === 6) {
        upperCategory[5] = upperCategory[5] + 6;
    }
    const sixesBtn = document.getElementById("sixesBtn");
    sixesBtn.parentNode.removeChild(sixesBtn);
    checkBonus();
    gameCounter ++;
    updateScoreCard();
}

function useThreeOfAKind() {
    const allDice = [die1, die2, die3, die4, die5];
    allDice.sort();
    if (allDice[0] === allDice[1] && allDice[1] === allDice[2]) {
        lowerCategory[0] = die1 + die2 + die3 + die4 + die5;
    } else if (allDice[1] === allDice[2] && allDice[2] === allDice[3]) {
        lowerCategory[0] = die1 + die2 + die3 + die4 + die5;
    } else if (allDice[2] === allDice[3] && allDice[3] === allDice[4]) {
        lowerCategory[0] = die1 + die2 + die3 + die4 + die5;
    } else {
        lowerCategory[0] = 0;
    }
    const threeKindBtn = document.getElementById("threeKindBtn");
    threeKindBtn.parentNode.removeChild(threeKindBtn);
    lowerTotal = lowerTotal + lowerCategory[0];
    gameCounter ++;
    updateScoreCard();
}

function useFourOfAKind() {
    const allDice = [die1, die2, die3, die4, die5];
    allDice.sort();
    if (allDice[0] === allDice[1] && allDice[1] === allDice[2] && allDice[2] === allDice[3]) {
        lowerCategory[1] = die1 + die2 + die3 + die4 + die5;
    } else if (allDice[1] === allDice[2] && allDice[2] === allDice[3] && allDice[3] === allDice[4]) {
        lowerCategory[1] = die1 + die2 + die3 + die4 + die5;
    } else {
        lowerCategory[1] = 0;
    }
    const fourKindBtn = document.getElementById("fourKindBtn");
    fourKindBtn.parentNode.removeChild(fourKindBtn);
    lowerTotal = lowerTotal + lowerCategory[1];
    gameCounter ++;
    updateScoreCard();
}

function useFullHouse() {
    const allDice = [die1, die2, die3, die4, die5];
    allDice.sort();
    if (allDice[0] === allDice [1] && allDice[1] === allDice[2] && allDice[3] === allDice[4]) {
        lowerCategory[2] = 25;
    } else if (allDice[0] === allDice[1] && allDice[2] === allDice[3] && allDice[3] === allDice[4]) {
        lowerCategory[2] = 25;
    } else {
        lowerCategory[2] = 0;
    }
    const fullHouseBtn = document.getElementById("fullHouseBtn");
    fullHouseBtn.parentNode.removeChild(fullHouseBtn);
    lowerTotal = lowerTotal + lowerCategory[2];
    gameCounter ++;
    updateScoreCard();
}

function useSmallStraight() {
    //const allDice = [die1, die2, die3, die4, die5];
    allDice = [4, 2, 3, 2, 1];
    allDice.sort();
    let counter = 0;
    do {
        if (allDice[counter] === allDice[counter + 1])
        {
            allDice.splice(counter, 1);
        }
        counter ++;
    } while (counter < allDice.length);
    if (allDice[0] === allDice[1] - 1 && allDice[1] === allDice[2] - 1 && allDice[2] === allDice[3] - 1) {
        lowerCategory[3] = 30;
    } else if (allDice[1] === allDice[2] - 1 && allDice[2] === allDice[3] - 1 && allDice[3] === allDice[4] - 1) {
        lowerCategory[3] = 30;
    } else {
        lowerCategory[3] = 0;
    }
    const smallStraightBtn = document.getElementById("smallStraightBtn");
    smallStraightBtn.parentNode.removeChild(smallStraightBtn);
    lowerTotal = lowerTotal + lowerCategory[3];
    gameCounter ++;
    updateScoreCard();
}

function useLargeStraight() {
    const allDice = [die1, die2, die3, die4, die5];
    allDice.sort();
    if (allDice[0] === allDice[1] - 1 && allDice[1] === allDice[2] - 1 && allDice[2] === allDice[3] - 1 && allDice[3] === allDice[4] - 1) {
        lowerCategory[4] = 40;
    } else {
        lowerCategory[4] = 0;
    }
    const largeStraightBtn = document.getElementById("largeStraightBtn");
    largeStraightBtn.parentNode.removeChild(largeStraightBtn);
    lowerTotal = lowerTotal + lowerCategory[4];
    gameCounter ++;
    updateScoreCard();
}

function useChance() {
    lowerCategory[5] = die1 + die2 + die3 + die4 + die5;
    const chanceBtn = document.getElementById("chanceBtn");
    chanceBtn.parentNode.removeChild(chanceBtn);
    lowerTotal = lowerTotal + lowerCategory[5];
    gameCounter ++;
    updateScoreCard();
}

function useYahtzee() {
    if (die1 === die2 && die2 === die3 && die3 === die4 && die4 === die5) {
        lowerCategory[6] = lowerCategory[6] + 50;
    } else {
        const yahtzeeBtn = document.getElementById("yahtzeeBtn");
        yahtzeeBtn.parentNode.removeChild(yahtzeeBtn);
        gameCounter ++;
    }
    lowerTotal = lowerTotal + lowerCategory[6];
    updateScoreCard();
}

function checkBonus() {
    let subtotal = 0;
    subtotal = upperCategory[0] + upperCategory[1] + upperCategory[2] + upperCategory[3] + upperCategory[4] + upperCategory[5];
    if (subtotal >= 63) {
        bonus = 35;
    } else {
        bonus = 0;
    }
}

//Rolls the dice and outputs the results.                      
function rollDice() {
    if (roll < 3) {
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
    } else {
        alert('You must select a category!');
    }
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

function updateScoreCard(){
    const ones = document.getElementById("ones");
    ones.textContent = upperCategory[0];
    const twos = document.getElementById("twos");
    twos.textContent = upperCategory[1];
    const threes = document.getElementById("threes");
    threes.textContent = upperCategory[2];
    const fours = document.getElementById("fours");
    fours.textContent = upperCategory[3];
    const fives = document.getElementById("fives");
    fives.textContent = upperCategory[4];
    const sixes = document.getElementById("sixes");
    sixes.textContent = upperCategory[5];
    const threeKind = document.getElementById("threeKind");
    threeKind.textContent = lowerCategory[0];
    const fourKind = document.getElementById("fourKind");
    fourKind.textContent = lowerCategory[1];
    const fullHouse = document.getElementById("fullHouse");
    fullHouse.textContent = lowerCategory[2];
    const smallStraight = document.getElementById("smallStraight");
    smallStraight.textContent = lowerCategory[3];
    const largeStraight = document.getElementById("largeStraight");
    largeStraight.textContent = lowerCategory[4];
    const chance = document.getElementById("chance");
    chance.textContent = lowerCategory[5];
    const yahtzee = document.getElementById("yahtzee");
    yahtzee.textContent = lowerCategory[6];
    const bonusScore = document.getElementById("bonus");
    bonusScore.textContent = bonus;
    upperTotal = upperCategory[0] + upperCategory[1] + upperCategory[2] + upperCategory[3] + upperCategory[4] + upperCategory[5] + bonus;
    grandTotal = upperTotal + lowerTotal;
    const upper = document.getElementById("upperTotal");
    upper.textContent = upperTotal;
    const lower = document.getElementById("lowerTotal");
    lower.textContent = lowerTotal;
    const grand = document.getElementById("total");
    grand.textContent = grandTotal;
    roll = 0;
    round ++;
    die1Hold = false;
    die2Hold = false;
    die3Hold = false;
    die4Hold = false;
    die5Hold = false;
    const holdDie1 = document.getElementById("die1Held");
    holdDie1.textContent = "Not Held";
    const holdDie2 = document.getElementById("die2Held");
    holdDie2.textContent = "Not Held";
    const holdDie3 = document.getElementById("die3Held");
    holdDie3.textContent = "Not Held";
    const holdDie4 = document.getElementById("die4Held");
    holdDie4.textContent = "Not Held";
    const holdDie5 = document.getElementById("die5Held");
    holdDie5.textContent = "Not Held";
    if (gameCounter < 13){
        rollDice();
    }
    else{
        alert('You have completed the game! Your total score is ' + grandTotal);
    }
}

function holdDieOne(){
    const holdDie = document.getElementById("die1Held");
    if (die1Hold === false){
        die1Hold = true;
        holdDie.textContent = "Held";
    }
    else{
        die1Hold = false;
        holdDie.textContent = "Not Held";
    }
}

function holdDieTwo(){
    const holdDie = document.getElementById("die2Held");
    if (die2Hold === false){
        die2Hold = true;
        holdDie.textContent = "Held";
    }
    else{
        die2Hold = false;
        holdDie.textContent = "Not Held";
    }
}

function holdDieThree(){
    const holdDie = document.getElementById("die3Held");
    if (die3Hold === false){
        die3Hold = true;
        holdDie.textContent = "Held";
    }
    else{
        die3Hold = false;
        holdDie.textContent = "Not Held";
    }
}
function holdDieFour(){
    const holdDie = document.getElementById("die4Held");
    if (die4Hold === false){
        die4Hold = true;
        holdDie.textContent = "Held";
    }
    else{
        die4Hold = false;
        holdDie.textContent = "Not Held";
    }
}
function holdDieFive(){
    const holdDie = document.getElementById("die5Held");
    if (die5Hold === false){
        die5Hold = true;
        holdDie.textContent = "Held";
    }
    else{
        die5Hold = false;
        holdDie.textContent = "Not Held";
    }
}