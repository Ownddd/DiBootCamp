function playTheGame() {

    const wantsToPlay = confirm("Would you like to play the game?");

    if (!wantsToPlay) {
        alert("No problem, Goodbye");
    } else {

        const userNumber = parseFloat(prompt("Enter a number between 0 and 10:"));


        if (isNaN(userNumber)) {
            alert("Sorry, not a number. Goodbye.");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, it's not a good number. Goodbye.");
        } else {

            const computerNumber = Math.floor(Math.random() * 11);


            compareNumbers(userNumber, computerNumber);
        }
    }
}


function compareNumbers(userNumber, computerNumber) {
    let attempts = 1;

    while (attempts <= 3) {
        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = parseFloat(prompt("Your number is bigger than the computer's, guess again:"));
        } else {
            userNumber = parseFloat(prompt("Your number is smaller than the computer's, guess again:"));
        }

        attempts++;
    }

    alert("Out of chances");
}


playTheGame();

