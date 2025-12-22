// This is a place to keep track of my learning while completing the Javacript course on Udemy.

// The let keyword is used to declare variables that can change later 
// (during the execution of our program)
let varibleName; 
variableName = 'First assignemnt';
variableName = 'Second assignment';  //variable was mutated to 'second assignment'

// The const keyword is used to declare a variable that cannot be chagned later 
const variableName2 = 2;
//If you try mutate this variable it will give you an error because it is imutable
variableName2 = 3;
//You also cannot decalre a variable without initializing it.
const variableName2;

//The var keyword is more of a legacy way to define variables which is prior to ES6
var job = 'programmer';
job = 'teacher';

// ** THERE IS AN IMPORTANT DIFFERENCE BETWEEN CONST, LET, AND VAR BUT IT WILL COME UP IN
//LATER SECTIONS BLOCK VS FUNCTION SCOPE DIF. 


//This works however, it dosen't create the variable in the scope it creates a property on
//the global object. ALWAYS DECLARE VARIABLES..
lastName = "last name";

const age = 17;
const isOldEnough = age >= 18;

// This is called an If else controlled structure, because this allows us to have more control over the way the code is executed,  Javacript dosen't exectue all of this code linearly.
if (isOldEnough) {
    console.log('I can drive yay 🐧');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young you need to wait for another ${yearsLeft} years until you can drive`);
}

//  Equality Operators == vs ===

const age = 18;
if (age === 18) console.log("you must be an adult");

// the === is the strict equality operator because it dosen't perform type couersion.  
// the == or the loose equality operator does perform type couersion.

