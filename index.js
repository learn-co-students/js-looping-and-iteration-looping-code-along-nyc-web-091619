// Code your solutions in this file
function writeCards(nameArray, event) {
    let thankYouCards = [];
    for (let i = 0; i < nameArray.length; i++) {
        thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
}

function countDown( startingNumber) {
    while (startingNumber > 0){
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}