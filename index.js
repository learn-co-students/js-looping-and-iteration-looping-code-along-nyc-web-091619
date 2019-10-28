// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}


function writeCards(names){
    let messages = [];
    for (let i=0; i < names.length; i++){
       messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
       
    }

    return messages;
}

function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }

}

countDown(4);

