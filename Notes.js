// This is a place to keep track of my learning while completing the Javacript course on Udemy.
const age = 17;
const isOldEnough = age >= 18;

// This is called an If else controlled structure, because this allows us to have more control over the way the code is executed,  Javacript dosen't exectue all of this code linearly.
if (isOldEnough) {
    console.log('I can drive yay 🐧');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young you need to wait for another ${yearsLeft} years until you can drive`);
}