/*<- - - - - - - - - - - - Lesson 2 - - - - - - - - - - - - - >*/

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

/*<- - - - - - - - - - - - Lesson 3 - - - - - - - - - - - - - >*/

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
let horseAge = 5;

let stableText = `Welcome to our stables, Wende Li! Our stable fee is $${100}. 
Your default horse, "${horseName}", is staying here for 3 months. 
This means you get a complimentary ${stablesDiscount * 100}% discount!
You will be charged $${STABLES_FEE - (STABLES_FEE * stablesDiscount)}.`;

/*<- - - - - - - - - - - - Lab (Lesson #5 - Uses Lesson(s) #4) - - - - - - - - - - - - - >*/

let isHorseInStable = true;

if (isHorseInStable == true){
    console.log(`"${horseName}" is in a stable. What a comfy horse. \n`, stableText);
} else if (isHorseInStable == false){
    console.log(`"${horseName}" is not currently in a stable. Consider trying our 3 month 10% deal!`);
}

/*<- - - - - - - - - - - - Lab (Lesson #6 - Uses Lesson(s) 4, 5) - - - - - - - - - - - - - >*/

// Horse = ["name, age, isInside"]

console.log(`\nThe horse array format is: horseName, horseAge, and isHorseInStable. 
(Their colors are manually pushed into their datasets)!\n`);

let horseOne= [horseName, horseAge, isHorseInStable];
let horseTwo= ["Cognac", 2, false];
let horseThree= ["Cocoa ", 7, true];

horseOne.push("Tamarind");
horseTwo.push("Maroon");
horseThree.push("Oak Brown");

console.log("Current horses: \n", 
    "\n", horseOne, 
    "\n", horseTwo, 
    "\n", horseThree);

console.log(`"${horseOne[0]}"'s color is ${horseOne[3]}.`);

console.log(`\nQuick inspection! Checking for if a horse is in a stable or not. 
Today's inspected horse is ${horseTwo[0]}, the "${horseTwo[3]}" colored horse. 
Their description of being in a stable is "${horseTwo[2]}"!`);

