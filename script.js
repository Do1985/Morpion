//morpion

document.addEventListener('DOMContentLoaded', () => {

const morpion =  [0, 1, 2, 3, 4, 5, 6, 7, 8]

const victory = [[0, 1, 2] [3, 4, 5] [6, 7, 8]
                [0, 3, 6] [1, 4, 7] [2, 5, 8]
                [0, 4, 8] [2, 4, 6]]


let turn = 0

document.addEventListener('DOMContentLoaded', () => {
    let caseOne = document.getElementById('0');
    let caseTwo = document.getElementById('1');
    let caseThree = document.getElementById('2');
    let caseFour = document.getElementById('3');
    let caseFive = document.getElementById('4');
    let caseSix = document.getElementById('5');
    let caseSeven = document.getElementById('6');
    let caseEight = document.getElementById('7');
    let caseNine = document.getElementById('8');
    
    
    
    caseOne.addEventListener("click", () => {
        if (turn === 0) {
            caseOne.innerText = '╳';
            turn++
        } else if (turn >= 1) {
            caseOne.innerText = '◯';
            turn--
        }
    })
});

bouttons.forEach(function(item){
        item.addEventListener("click", () => onClick(item))
    })

morpion.forEach(possibility => {
        if (possibility[0] === possibility[1] && possibility[1] === possibility[2]) {
            alert('Vous avez gagné');
        }
    })

/*en attente:

function entierAleatoire(max, hasardMorpion)
{
    let result = 0
    for(let i = 0; i < 9; i++) {
        result += Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
    return result

*/