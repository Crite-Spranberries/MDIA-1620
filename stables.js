/*<- - - - - - - - - - - - Lesson 3 - - - - - - - - - - - - - >*/

// console.log("Horses are great!");

// // Initializations
// let horseName = "Coolguy";
// horseName = "Tennessee Walker";
// let horseAge = 5;

// // Stable status
// let isHorseInStable = true;
// isHorseInStable = false;

// // Print
// console.log(horseName, horseAge, isHorseInStable);

/*<- - - - - - - - - - - - Lesson 4 - - - - - - - - - - - - - >*/

// console.log(typeof 999);
// console.log(typeof "890");
// console.log(typeof true);
// console.log(typeof horseAge);

// const STABLE_MONTHLY_FEE = 500;
// console.log(STABLE_MONTHLY_FEE);
// console.log(STABLE_MONTHLY_FEE - 50);
// console.log(STABLE_MONTHLY_FEE *.10);

// let owner = "Arthur Morgan";
// let horse = "Tenn Walker";
// let stableIntro = `This stable costs $${STABLE_MONTHLY_FEE} for ${owner}'s "${horse}".`
// console.log(stableIntro);

/*<- - - - - - - - - - - - Lab (Lesson #4) - - - - - - - - - - - - - >*/

const STABLES_FEE = 300;
let stablesDiscount = .10;

let horseName = "Tennessee Walker";

let stableText = `Welcome to our stables, Wende Li! Our stable fee is $${100}. 
Your default horse, "${horseName}", is staying here for 3 months. 
This means you get a complimentary ${stablesDiscount * 100}% discount!
You will be charged $${STABLES_FEE - (STABLES_FEE * stablesDiscount)}.`;

console.log(stableText);