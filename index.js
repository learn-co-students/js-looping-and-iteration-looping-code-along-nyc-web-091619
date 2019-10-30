import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// Code your solutions in this file
function writeCards(cards) {
    let newArray = []
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(number) {
    while (0 <= number) {
        console.log(number--)
    }
}