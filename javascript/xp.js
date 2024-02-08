//ex1
let favFood = "pizza"
let favMeal = "dinner"
console.log('I eat ' + favFood + ' at every ' + favMeal)

//ex2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log('I watched 3 series : ' + myWatchedSeries)

myWatchedSeries[2]="friends"
myWatchedSeries.push("suits")
myWatchedSeries.unshift("Breaking Bad")
myWatchedSeries.splice(1,1)
console.log()
console.log('I watched 3 series : ' + myWatchedSeries)



const myWatchedSeriesSentence = ["Breaking bad", "Suits", "Invincible"]
console.log('I watched 3 series : ' + myWatchedSeriesSentence)

//ex3

let celsius = "15"
let fahrenhiet = celsius/5
fahrenhiet= fahrenhiet*9
fahrenhiet=fahrenhiet+32
console.log(fahrenhiet)

//ex4

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:55
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual:23

    console.log(3 + 4 + '5');
    // Prediction:75
    // Actual:75

    //ex5

    console.log(typeof(15))
    // Prediction:15
    // Actual:number

    console.log(typeof(5.5))
    // Prediction:number
    // Actual:number

    console.log(typeof(NaN))
    // Prediction:NaN
    // Actual:number

    console.log(typeof("hello"))
    // Prediction:hello
    // Actual:string

    console.log(typeof(true))
    // Prediction:boolean
    // Actual:boolean

    console.log(typeof(1 != 2))
    // Prediction:boolean
    // Actual:boolean

    console.log ("hamburger" + "s")
    // Prediction: hamburgers
    // Actual:hamburgers

    console.log("hamburgers" - "s")
    // Prediction:hamburger
    // Actual:NaN

    console.log("1" + "3")
    // Prediction:13
    // Actual:13

    console.log("1" - "3")
    // Prediction:Nan
    // Actual:-2

    console.log("johnny" + 5)
    // Prediction:johnny5
    // Actual:johnny5

    console.log("johnny" - 5)
    // Prediction:Nan
    // Actual:Nan

    console.log(99 * "hello")
    // Prediction:NaN
    // Actual:NaN

    console.log(1 != 1)
    // Prediction:false
    // Actual:false

    console.log(1 == "1")
    // Prediction:true
    // Actual:true

    console.log(1 === "1")
    // Prediction:false
    // Actual:false

    //ex6

    console.log(5 + "34")
// Prediction:534
// Actual:534

console.log(5 - "4")
// Prediction:1
// Actual:1

console.log(10 % 5)
// Prediction:.5
// Actual:0

console.log(5 % 10)
// Prediction:.5
// Actual:5

console.log("Java" + "Script")
// Prediction:JavaScript
// Actual:JavaScript

console.log(" " + " ")
// Prediction: 
// Actual:  

console.log(" " + 0)
// Prediction: 0
// Actual: 0

console.log(true + true)
// Prediction:true
// Actual:2

console.log(true + false)
// Prediction:2
// Actual:1

console.log((false + true))
// Prediction:1
// Actual:1

console.log(false - true)
// Prediction:-1
// Actual:-1

console.log(!true)
// Prediction:1
// Actual:false

console.log(3 - 4)
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill")
// Prediction:Nan
// Actual:NaN

