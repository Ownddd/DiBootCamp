//fucntions
//ex1
// Part 1
function infoAboutMe() {
    console.log("");
}

infoAboutMe();

// Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//ex2

function calculateTip() {

    const billAmount = parseFloat(prompt("Enter the amount of the bill:"));

    let tipPercentage;
    if (billAmount < 50) {
        tipPercentage = 0.2; // 20% tip
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipPercentage = 0.15; // 15% tip
    } else {
        tipPercentage = 0.1; // 10% tip
    }
    const tipAmount = billAmount * tipPercentage;
    const finalBill = billAmount + tipAmount;
    console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final Bill: $${finalBill.toFixed(2)}`);
}
calculateTip();

//ex3

function isDivisible() {
    let sumOfDivisibleBy23 = 0;

    for (let number = 0; number <= 500; number++) {
        if (number % 23 === 0) {
            console.log(number + " is divisible by 23");
            sumOfDivisibleBy23 += number;
        }
    }

    console.log("Sum of numbers divisible by 23:", sumOfDivisibleBy23);
}
isDivisible();

//ex4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalBill = 0;

    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            totalBill += prices[item];
            stock[item]--;
        }
    }

    return totalBill;
}

const total = myBill();
console.log("Total Bill:", total);

//ex5

function changeEnough(itemPrice, amountOfChange) {
 
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const totalChange = (
        amountOfChange[0] * quarterValue +
        amountOfChange[1] * dimeValue +
        amountOfChange[2] * nickelValue +
        amountOfChange[3] * pennyValue
    ).toFixed(2);

    return totalChange >= itemPrice;
}

const result = changeEnough(4.25, [25, 20, 5, 0]);

console.log(result);

//ex6

function hotelCost() {
    let numberOfNights;

    // Ask the user for the number of nights and validate the input
    do {
        const userInput = prompt("Enter the number of nights you would like to stay in the hotel:");
        numberOfNights = parseInt(userInput);

    } while (isNaN(numberOfNights) || numberOfNights <= 0);

    // Calculate and return the total price of the hotel
    const hotelCostPerNight = 140;
    return numberOfNights * hotelCostPerNight;
}

function planeRideCost() {
    let destination;

    // Ask the user for their destination and validate the input
    do {
        destination = prompt("Enter your destination (London, Paris, or other):").toLowerCase();

    } while (destination !== "london" && destination !== "paris" && destination !== "other");

    // Return the price based on the destination
    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let numberOfDays;
    do {
        const userInput = prompt("Enter the number of days you would like to rent the car:");
        numberOfDays = parseInt(userInput);
    } while (isNaN(numberOfDays) || numberOfDays <= 0);
    const dailyCarCost = 40;
    let totalCarCost = numberOfDays * dailyCarCost;
    if (numberOfDays > 10) {
        totalCarCost *= 0.95;
    }
    return totalCarCost;
}
function totalVacationCost() {
    const hotelCostValue = hotelCost();
    const planeRideCostValue = planeRideCost();
    const rentalCarCostValue = rentalCarCost();
    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;
    console.log(`The hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}, the car cost: $${rentalCarCostValue}.`);
    console.log(`Total Vacation Cost: $${totalCost}`);
}

totalVacationCost();

