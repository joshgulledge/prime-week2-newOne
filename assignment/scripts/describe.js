// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// a vairable is created that holds the name "Dane"
// the name variable is checked against the string "Mary", since "Dane" is not
// equal to "Mary" the else block runs and we console log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//we create a variable named secret but dont give it a value, then a variable named
//code with a value of 123. We check to see if code is equal to 123, since it is
//code block runs and the value of "super" is assigned to secret, then code is mutliplied
//by two. We then check to see if code is greater than 250, it now has a value of 246
// which is less than 250 so that block does not run. We then log secret to the Console
// and that logs the string "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//here we start with three variables, one boolean set to true and two number variables.
//The first line of the if statement checks to see if the student value is set to true,
// and that the zip is greater than 80000. Although the student variable is true the zip
// is less than 80000 so this line does not run, the next line checks if student is false
// or the age is less than 30. student is true and age is greater than 30 so neither of
// these conditions are met and the line does not run. Next is a line that only checks to
//see if the student variable is true, and it is, so this line runs which logs to the Console
// the string "Welcome to Prime!". Now the code exits this code block.
// And thank you for the welcome :)

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Make the code match the description-- comment above the problem code and a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

// number-- decrements number, and the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/





//4. We start with three variables -- colorOne is set to 'blue' and colorTwo is set to 'red', and mix is set to true. We check if mix is true
//-- it is, so we set colorOne and colorTwo to 'purple'

/*
// according to the instructions these two colors should be switched:
// let colorOne = "blue" ; let colorTwo = "red"
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// The instructions say to make both colors equal to purple if this code runs:
// colorOne = "purple" ; colorTwo = "purple"
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// the instructions say this should be an and statement not an or statement:
// (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!);
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// here the log statement is switched, instructions say if age is greater than minAge,
// log should return "enter", this code has it reversed and includes an equal.
//  if(minAge < age) {                // if (age > minAge) {
//   console.log('enter');            //   console.log('enter');
// } else {                           // } else {
//   console.log('no entry');         //   console.log("no entry");
// }                                  // }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
