// Code your solutions in this file
function writeCards(nameArr, event) {
    let thankYouMessages = []
    for(let i = 0; i < nameArr.length; i++) {
        thankYouMessages.push(`Thank you, ${nameArr[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

function countDown(num) {
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}