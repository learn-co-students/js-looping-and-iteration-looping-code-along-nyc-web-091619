// Code your solutions in this file
let thankYouCards = []

function writeCards (namesArray, event) {
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown (start) {
    while ( start > 0 ) {
        console.log (start);
        start -= 1;
    }
    console.log(start);
}
