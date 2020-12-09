// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = `Josh`;

// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = `Gulledge`;

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
const fullName = firstName + " " + lastName;

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 89;

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
// console.log("My name is " + fullName + ", and I think " + luckyNumber + " is a winner!");
console.log(`My name is ${fullName}, and I think ${luckyNumber} is a winner!`);

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "thin crust pizza";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 3;

// 11 - Add two pets to your `pets` variable
pets += 2;

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 0;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous) {
  console.log("Adventures are great!");
} else {
  console.log("How about we stay home?");
};

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && adventurous) {
  console.log("Roll the dice!");
} else if (luckyNumber === 89 && adventurous) {
  console.log("Lets make some memories!");
} else {
  console.log("Staying home is nice too. Lets find a new game.");
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
  console.log("I can have more pets!");
} else if (allowedPets === pets) {
  console.log("I have enough pets");
} else {
  console.log("Oh no, I have too many pets!");
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
let mostPets = 0;
if (pets > friendsPets) {
  mostPets = pets;
} else  {
  mostPets = friendsPets;
};
console.log(mostPets);

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
let morePets = 0;

switch (true) {
  case (friendsPets > pets):
    console.log("Friend has more pets");
    morePets = friendsPets;
    break;
  case (pets > friendsPets):
    console.log("I have more pets");
    morePets = pets;
  break;
  default:
    console.log("We have the same amount of pets");
    morePets = pets;
};
console.log(morePets);


// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
 adventurous ? console.log("Adventures are great!") : console.log("How about we stay home?");
