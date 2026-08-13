// This is a place to keep track of my learning while completing the Javacript course on Udemy.

// The let keyword is used to declare variables that can change later
// (during the execution of our program)
let varibleName;
variableName = "First assignemnt";
variableName = "Second assignment"; //variable was mutated to 'second assignment'

// The const keyword is used to declare a variable that cannot be chagned later
const variableName2 = 2;
//If you try mutate this variable it will give you an error because it is imutable
variableName2 = 3;
//You also cannot decalre a variable without initializing it.
const variableName2;

//The var keyword is more of a legacy way to define variables which is prior to ES6
var job = "programmer";
job = "teacher";

// ** THERE IS AN IMPORTANT DIFFERENCE BETWEEN CONST, LET, AND VAR BUT IT WILL COME UP IN
//LATER SECTIONS BLOCK VS FUNCTION SCOPE DIF.

//This works however, it dosen't create the variable in the scope it creates a property on
//the global object. ALWAYS DECLARE VARIABLES..
lastName = "last name";

const age = 17;
const isOldEnough = age >= 18;

// This is called an If else controlled structure, because this allows us to have more control over the way the code is executed,  Javacript dosen't exectue all of this code linearly.
if (isOldEnough) {
  console.log("I can drive yay 🐧");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are too young you need to wait for another ${yearsLeft} years until you can drive`,
  );
}

//  Equality Operators == vs ===

age = 18;
if (age === 18) console.log("you must be an adult");

// the === is the strict equality operator because it dosen't perform type couersion.
// the == or the loose equality operator does perform type couersion.
// Try to always use the strict equality operator, even if you need to convert the value manually

prompt("what's your favorite number?");

// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // True and true = true

console.log(hasDriversLicense || hasGoodVision); // true or true = true

console.log(!hasDriversLicense); //Not has drivers license = false opposite of.

const shouldDrive = hasDriversLicense && hasGoodVision;

/* Write your code below. Good luck! 🙂 */
const bills = [125, 555, 44];
const tips = [];

const calcTip = (bill) => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }

  return tip;
};

tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);

for (let i = 0; i < 3; i++) {
  console.log(tips[i]);
}

// Debugging with the console and breakpoints
//Any unexpected behavior or product from a program

//certain bugs can happen in certain browsers or under certain contexts or for certain users
//Developer console (simple code)
//Debugger (complex code)

const measureKevlin = function () {
  const measurement = {
    type: "temperature",
    unit: "celcius",
    value: Number(prompt("Degrees celcius")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

measureKevlin();
