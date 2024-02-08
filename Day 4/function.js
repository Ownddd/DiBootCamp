//functions

// function drinkCoffee(){
//     console.log("The user drinks coffee in the morning");
// }

//daily challenge
// const userInput = prompt("Enter several words separated by commas:");
// const wordsArray = userInput.split(',');
// const maxLength = Math.max(...wordsArray.map(word => word.length));
// console.log('*'.repeat(maxLength + 4));
// for (const word of wordsArray) {
//     console.log(`* ${word.padEnd(maxLength)} *`);
// }
// console.log('*'.repeat(maxLength + 4));
function guessTheNumberGame() {
    // Generate a random number between 1 and 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let guess;
    let attempts = 0;

    console.log("Welcome to the Guess the Number Game!");
    console.log("Try to guess the number between 1 and 100.");

    do {
        guess = parseInt(prompt("Enter your guess:"));
        attempts++;

        if (guess > secretNumber) {
            console.log("Too high! Try again.");
        } else if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        }
    } while (guess !== secretNumber);
}

// Run the game
guessTheNumberGame();
