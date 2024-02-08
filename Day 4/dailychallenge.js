//daily challenge
const userInput = prompt("Enter several words separated by commas:");

const wordsArray = userInput.split(',');

const maxLength = Math.max(...wordsArray.map(word => word.length));

console.log('*'.repeat(maxLength + 4));
for (const word of wordsArray) {
    console.log(`* ${word.padEnd(maxLength)} *`);
}
console.log('*'.repeat(maxLength + 4));
