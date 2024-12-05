    //       ,//)
    //     ,;;' \
    //   ,;;' ( '\
    //       / '\_)      Tenn
         
    //       ,//)
    //     ,;;' \
    //   ,;;' ( '\
    //       / '\_|      Wumpy
     
    //       ,//)
    //     ,;;' \
    //   ,;;' ( '\,
    //       / '\_/      Soup

    //       ,//)
    //     ,;;' \
    //   ,;;' ( '\,
    //       / '\_}      Seven

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Initialization for general variables
let horses = [];
let visitorsMsg = "Hello, welcome to this very cool stable, yes.";
const LATE_PAYMENT_FEE = 10; 
const NUM_MAX_STALLS = 5;
let curAvailStalls; 
let horseIndex;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Function to check for available stalls at any time in the code below.
function checkStalls(){
curAvailStalls = NUM_MAX_STALLS - horses.length;
if (curAvailStalls >= 3){
    console.log(`We have ${curAvailStalls} stalls available!`);
} else if(curAvailStalls <= 2){
    console.log(`We need to build more stalls. ${curAvailStalls} stall(s) currently available..`);
}
}
checkStalls();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Constructor for horses.
function Horse(name, nickname, breed, handler, favTreat, age, monthlyRent, isInside){
    this.name                = name;
    this.nickname            = nickname;
    this.breed               = breed;
    this.handler             = handler;
    this.favTreat            = favTreat;
    this.age                 = age;
    this.monthlyRent         = monthlyRent;
    this.isInside            = isInside;

    // Logs horse intro
    this.introduction        = function sayIntro(){
        console.log(`This horse's name is ${this.name}. ${this.name} is ${this.age} years old, and ${this.owner} is their handler!`);
    };

    // Logs some fun facts about this horse!
    this.funFacts            = function sayFacts(){
        console.log(`FUN FACT: This horse likes to eat ${this.favTreat}. Their nickname is ${this.nickname}, and they are a(n) ${this.breed}.`);
    }

    // Function to make this horse go inside or outside when called.
    this.sendHorseOutOrIn      = function outOrIn(){
        console.log(`${this.name}'s isInside value is currently: ${this.isInside}.`);
        if (this.isInside == true){
            this.isInside = false;
            console.log(`${this.name} has been sent outside.`);
        } else {
            this.isInside = true;
            console.log(`${this.name} has been sent inside.`);
    }

    }
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Horse Object initializations + Push
// name, nickname, breed, handler, favTreat, age, monthlyRent, isInside

const horse1 = new Horse("Walker", "Tenn", "Tennessee Walking Horse", "John", "Apples", 18, 15, true);
const horse2 = new Horse("Wumpus", "Wumpy","Arabian Horse", "Huey", "Biscuits", 4, 5, false);
const horse3 = new Horse("Campbell", "Soup","Thoroughbred Horse", "Boyde", "Carrots", 21, 15, true);
horses.push(horse1, horse2, horse3);

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Object literal initialization + Push

const horse4 = {
    name:             "Sven",
    nickname:         "Seven",
    breed:            "Arabian Horse",
    handler:          "Gareth",
    favTreat:         "Potatoes",
    age:              7,
    monthlyRent:      7,
    isInside:         false,
}
horses.push(horse4);
checkStalls();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// All horses so far!
//
// const horse1 = {
//     name:             "Walker",
//     nickname:         "Tenn",
//     breed:            "Tennessee Walking Horse",
//     handler:          "John",
//     favTreat:         "Apples",
//     age:              18,
//     monthlyRent:      15,
//     isInside:         true,
// }

// const horse2 = {
//     name:             "Wumpus",
//     nickname:         "Wumpy",
//     breed:            "Arabian Horse",
//     handler:          "Huey",
//     favTreat:         "Biscuits",
//     age:              4,
//     monthlyRent:      5,
//     isInside:         false,
// }

// const horse3 = {
//     name:             "Campbell",
//     nickname:         "Soup",
//     breed:            "Thoroughbred Horse",
//     handler:          "Boyde",
//     favTreat:         "Carrots",
//     age:              21,
//     monthlyRent:      15,
//     isInside:         true,
// }

// const horse4 = {
//     name:             "Sven",
//     nickname:         "Seven",
//     breed:            "Arabian Horse",
//     handler:          "Gareth",
//     favTreat:         "Potatoes",
//     age:              7,
//     monthlyRent:      7,
//     isInside:         false,
// }

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Unique function to check if a chosen horse is an Arabian Horse
function arabianChecker(inputHorse){
    if (inputHorse.breed === "Arabian Horse"){
        console.log("Oh yeah, we're looking at quite a fast Arabian Horse here.");
    } else console.log("Wait, this isn't an Arabian Horse :(");
}
arabianChecker(horses[0]);

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Loop to add the isHungry property (true) to horses array + checks a horse for their hunger.
function addHunger(){
    for (let i =0; i< horses.length; i++){
        horses[i].isHungry = true;
        console.log(`Added a true isHungry property to ${horses[i].name}!`);
    }
}
addHunger();
console.log(`The status for ${horses[0].name}'s isHungry is: ${horses[0].isHungry}`);

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Grabs a specific horse and checks how much they'd hypothetically owe if they're late in fees (monthly rent + late payment fee)
function hasLateRent(checkHorse){
    console.log(`${horses[checkHorse].name} currently owes $${LATE_PAYMENT_FEE + horses[checkHorse].monthlyRent} in late rent fees!`);
}

hasLateRent(2);

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function likesBiscuits(){
    console.log(`I wonder if these horses like biscuits..`);
for (let i = 0; i < horses.length; i++){
        if (horses[i].favTreat === "Biscuits"){
            console.log(`${horses[i].name} likes biscuits as a treat!`);
            break;
        } else if(horses[i].favTreat !== "Biscuits"){
            console.log(`${horses[i].name} doesn't like biscuits as a treat.`);
    }
}
}
likesBiscuits();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Logs the return of a horse nickname via function
function nicknameLogger(inputHorse){
    return inputHorse.nickname;
}
console.log(`To confirm the nicknameLogger function call, the nickname for ${horses[0].name} is ${nicknameLogger(horses[0])}.`);

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Test out the individual function call to move horses outside or inside.
horses[0].sendHorseOutOrIn();
horses[0].sendHorseOutOrIn();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Moves horses outside automatically, then sends them inside immediately after to simulate a day/night cycle. 
function moveHorses(){
    console.log("It's sunny outside!");
    for (let i =0; i < horses.length; i++){
        if(horses[i].isInside == true){
            horses[i].isInside = false;
            console.log(`${horses[i].name} has been sent outside to spend time in the sun!`);
        } else console.log(`${horses[i].name} is already frolicking in the fields.`);
    }

    console.log("It's getting dark..");
    for (let i =0; i < horses.length; i++){
        if(horses[i].isInside == false){
            horses[i].isInside = true;
            console.log(`${horses[i].name} has been sent inside to get ready for bed.`);
        } else console.log(`${horses[i].name} is already cozy in their stables.`);
    }
}
moveHorses();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function feedHorses(){
    console.log("It's time to eat!");
    for (let i =0; i < horses.length; i++){
        if(horses[i].isInside == false){
            horses[i].isInside = true;
            console.log(`${horses[i].name} has been sent inside to grab some food!`);
        } else console.log(`${horses[i].name} is already in their stables.`);

        if(horses[i].isHungry == true){
            horses[i].isHungry = false;
            console.log(`${horses[i].name} has been fed some grub. Yummy.`);           
        } else console.log(`${horses[i].name} is already feeling pretty well fed!`);
    }
}
feedHorses();

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SECTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Space to call any of the functions!