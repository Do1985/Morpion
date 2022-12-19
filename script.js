//morpion

document.addEventListener('DOMContentLoaded', () => {

const morpion =  [0, 1, 2, 3, 4, 5, 6, 7, 8]

const victory = [[0, 1, 2] [3, 4, 5] [6, 7, 8]
                [0, 3, 6] [1, 4, 7] [2, 5, 8]
                [0, 4, 8] [2, 4, 6]]


let turn = 0

document.addEventListener('DOMContentLoaded', () => {
    let caseOne = document.getElementById('1');
    let caseTwo = document.getElementById('2');
    let caseThree = document.getElementById('3');
    let caseFour = document.getElementById('4');
    let caseFive = document.getElementById('5');
    let caseSix = document.getElementById('6');
    let caseSeven = document.getElementById('7');
    let caseEight = document.getElementById('8');
    let caseNine = document.getElementById('9');
    
    caseOne.addEventListener("click", () => {
        if (turn === 0) {
            caseOne.innerText = 'X';
            turn++
        } else if (turn >= 1) {
            caseOne.innerText = 'O';
            turn--
        }
    })
});






//en attente:

function entierAleatoire(max, hasardMorpion)
{
    let result = 0
    for(let i = 0; i < hasardMorpion; i++) {
        result += Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
    return result

