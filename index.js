// Code your solutions in this file
function writeCards(name_array, event_name) {
    var thanks = [];

    for (let i = 0; i < name_array.length; i++) {
        thanks.push(`Thank you, ${name_array[i]}, for the wonderful ${event_name} gift!`);
    }
    return thanks;
}

function countDown(positive_integer) {
    if (positive_integer < 1) {
        console.log("That number is not positive");
        return;
    }

    while (positive_integer >= 0) {
        console.log(positive_integer);
        positive_integer -= 1;
    }
    
}
