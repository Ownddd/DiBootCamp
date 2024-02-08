//ex 1

let x = 5;
let y = 2;
if (x>y) {
    console.log("x is the biggest number")
}
else{
    console.log("y is the biggest number")
}

//ex 2

let newDog = "Chihuahua"

console.log(newDog.length+1)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed")
}
else {
console.log("I dont care, I prefer cats")
}

//ex3
// let number = prompt("Choose a number")
// if ((number%2)==0) {
//     console.log(number +" is an even number")
// } else {
//     console.log(number +" is an odd number")
// }

//ex4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "jhkfe"];

if (users.length == 0){
    console.log("no one is online");
}
else if (users.length == 1){
    console.log(users[0]);
}
else {
    console.log(users[0]+', '+users[1]+' and '+(users.length-2)+ ' more are online');
}


//daily challenge

let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    let newSentence1 = sentence.slice(0, wordNot-1)
    let newSentence2 = sentence.slice(wordBad+3, sentence.length)
    let fullSentence = (newSentence1+' good'+ newSentence2)
    console.log(fullSentence)
 } else {
    console.log(sentence)
 }

 