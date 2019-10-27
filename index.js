function writeCards(arr, message) {
  const messages = [];
  arr.forEach(element => {
    messages.push(`Thank you, ${element}, for the wonderful ${message} gift!`);
  });
  return messages;
}

function countDown(num) {
  let counter = num;
  while (counter >= 0) {
    console.log(counter);
    counter -= 1;
  }
}
