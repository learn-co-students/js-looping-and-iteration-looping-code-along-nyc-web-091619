import { eventNames } from "cluster";

// Code your solutions in this file
function writeCards(names, type) {
    const responses = [];
    for (let i = 0; i < names.length; i++) {
        responses.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return responses;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        --num;
    }
}

