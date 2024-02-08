// ex1
// part 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people[2]="Jason"
people.push("Yoni")
console.log([people])
console.log(people.indexOf('Mary'));
people.slice(1, 3)
let exclusive = people.slice(1,3)
console.log(people.indexOf('foo'));
let last = people.length-1
console.log(people[last]);

//part 2
for (i of people) {
    if (i=="Devon"){
        console.log(i);
        break;
    }
    
}
// ex 2
let colors = ['blue', 'red', 'green', 'purple', 'orange'];
let suffixes = ['st', 'nd', 'rd', 'th'];
for (let i = 0; i < colors.length; i++) {
    let suffixIndex = i <= 3 ? i : 3;
    console.log(`My ${i + 1}${suffixes[suffixIndex]} choice is ${colors[i]}`);
}

//ex3

let userInput = prompt("Enter a number:");
let userNumber = parseFloat(userInput);

while (typeof userNumber === 'number' && userNumber < 10) {
    userInput = prompt("Enter a new number:");
    userNumber = parseFloat(userInput);
}

console.log("You entered a number greater than or equal to 10 or a non-number input. Exiting the loop.");

//ex 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: { firstFloor: 3, secondFloor: 4, thirdFloor: 9, fourthFloor: 2 },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: { sarah: [3, 990], dan: [4, 1000], david: [1, 500] },
};

console.log("Number of floors in the building:", building.numberOfFloors);


console.log("Apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);


const [ , secondTenant, [roomsOfSecondTenant] ] = Object.entries(building.numberOfRoomsAndRent);
console.log("Name of the second tenant:", secondTenant);
console.log("Number of rooms of the second tenant:", roomsOfSecondTenant);


const [sarahRent, davidRent] = Object.values(building.numberOfRoomsAndRent);
building.numberOfRoomsAndRent.dan[1] = sarahRent + davidRent > building.numberOfRoomsAndRent.dan[1] ? 1200 : building.numberOfRoomsAndRent.dan[1];


console.log("Updated building object:", building);


//ex5

const family = {
    father: 'John',
    mother: 'Jane',
    son: 'Tom',
    daughter: 'Emma',
};


console.log("Keys of the 'family' object:");
for (let key in family) {
    console.log(key);
}


console.log("\nValues of the 'family' object:");
for (let key in family) {
    console.log(family[key]);
}

//ex6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};

let resultString = '';

for (let key in details) {
    resultString += details[key] + ' ';
}

console.log(resultString.trim());

//ex7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretSocietyName = names.map(name => name[0]).sort().join('');
console.log("The name of the secret society:", secretSocietyName);

