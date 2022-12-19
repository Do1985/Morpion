//morpion

//document.addEventListener('DOMContentLoaded', () => {

const morpion = ["", "", "", "", "", "", "", "", ""]

const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let turn = document.getElementById("turn");
turn = 0
const allCase = []

const onClick = (item) => {
    console.log("test")
    if (turn === 0) {
        item.innerText = '╳';
        turn++
    }
    else if (turn >= 1) {
        item.innerText = '◯';
        turn--
    }
}

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


    allCase.push(caseOne, caseTwo,caseThree,caseFour,caseFive, caseSix,caseSeven, caseEight, caseNine)  


allCase.forEach(function(item) {
    item.addEventListener("click", () => onClick(item))
})


});


morpion.forEach(possibility => {
    if(allCase === ""){
        alert('INSERT COINS')
        if (possibility[0] === possibility[1] && possibility[1] === possibility[2]) {
            alert('Vous avez gagné');
        }
        else if (possibility[3] === possibility[4] && possibility[4] === possibility[5]) {
            alert('Vous avez gagné');
        }
        else if (possibility[6] === possibility[7] && possibility[7] === possibility[8]) {
            alert('Vous avez gagné');
        }
        else if (possibility[0] === possibility[3] && possibility[3] === possibility[6]) {
            alert('Vous avez gagné');
        }
        else if (possibility[1] === possibility[4] && possibility[4] === possibility[7]) {
            alert('Vous avez gagné');
        }
        else if (possibility[2] === possibility[5] && possibility[5] === possibility[8]) {
            alert('Vous avez gagné');
        }
        else if (possibility[2] === possibility[4] && possibility[4] === possibility[6]) {
            alert('Vous avez gagné');
        }
        else if (possibility[0] === possibility[4] && possibility[4] === possibility[8]) {
            alert('Vous avez gagné');
        }
        else(possibility[""] === possibility[""] && possibility[""] === possibility[""])
        alert('Commencez à jouer');
    }

})
*/
/*en attente:

function entierAleatoire(max, hasardMorpion)
{
    let result = 0
    for(let i = 0; i < 9; i++) {
        result += Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
    return result

*/
