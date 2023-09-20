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


function countDown(numb) {
    let i = 0;
    while (i < numb) {
        console.log(i);
        i++;
    }
    console.log(i);
}
countDown(10);