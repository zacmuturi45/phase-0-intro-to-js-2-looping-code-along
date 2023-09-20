const Cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(gif, gify) {
    for(let i = 0; i < Cards.length; i++) {
        console.log(`Thank you, ${Cards[i]}, for the wonderful ${gify} gift!`);
        debugger;
    }
    return Array = [
        `Thank you, ${Cards[0]}, for the wonderful ${gify} gift!`,
        `Thank you, ${Cards[1]}, for the wonderful ${gify} gift!`,
        `Thank you, ${Cards[2]}, for the wonderful ${gify} gift!`,
    ];
}


writeCards(Cards, "surprise");