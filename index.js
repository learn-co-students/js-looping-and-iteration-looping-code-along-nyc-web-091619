// Code your solutions in this file
let msgsArray = [];

function writeCards(nameArray, day) {
    for (let index = 0; index < nameArray.length; index++) {
        msgsArray.push(`Thank you, ${nameArray[index]}, for the wonderful ${day} gift!`)
    }
    return msgsArray
}


function countDown(numOfTimes) {
    while (numOfTimes >= 0) {
        console.log(numOfTimes)
        numOfTimes--
    }
}