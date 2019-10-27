function writeCards(names, eventName) {
    const thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thanks;
}

function countDown(number) {
    let i = number;
    while (number >= 0) {
        console.log(number);
        number--;
    } 
}