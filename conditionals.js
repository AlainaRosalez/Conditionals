let sale = true;
if (sale) {
        console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.')
}



//! Comparison Operators

let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!')
  } else {
    console.log('We can eat later!')
  }



//! Logical Operators

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep')
  } else {
    console.log('not bed time yet')
  }



//! Truthy and Falsy

let wordCount = 15; /*removed '0'*/
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = ''; /*'Hello World!' was removed*/
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//! Truthy and Falsy Assignment

let tool = 'marker'; //originally just ''

//* Use short circuit evaluation to assign  writingUtensil variable below:

let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);


//! Ternary Operator

let isLocked = false;
if (isLocked) {
    isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;
if (isCorrect) {
    isCorrect ? console.log('Correct!') : console.log('Incorrect!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';
/*if (favoritePhrase === 'Love That!') {
    favoritePhrase ? console.log('I love that!') : console.log("I don't love that!");
} else {
  console.log("I don't love that!");
}*/
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


//! Else If Statements

let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} /*else {
  console.log('Invalid season.');
}*/
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


//! The Switch keyword

let athleteFinalPosition = 'first place';
switch(athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;


  case 'second place':
  console.log('You get the silver medal!');
  break;

  case 'third place':
  console.log('You get the bronze medal!');
  break;

  case 'default':
    console.log('No medal awarded.')
    break;
}