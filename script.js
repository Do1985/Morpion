//morpion

document.addEventListener('DOMContentLoaded', () => {

const morpion =  [0, 1, 2, 3, 4, 5, 6, 7, 8]

const victory = [[0, 1, 2] [3, 4, 5] [6, 7, 8]
                [0, 3, 6] [1, 4, 7] [2, 5, 8]
                [0, 4, 8] [2, 4, 6]]


function entierAleatoire(max, hasardMorpion)
{
    let result = 0
    for(let i = 0; i < hasardMorpion; i++) {
        result += Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
    return result

