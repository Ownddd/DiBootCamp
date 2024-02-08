//ex1
//part 1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift()
// people[2]="Jason"
// people.push("Yoni")
// console.log([people])
// console.log(people.indexOf('Mary'));
// people.slice(1, 3)
// let exclusive = people.slice(1,3)
// console.log(people.indexOf('foo'));
// let last = people.length-1
// console.log(people[last]);

// //part 2
// for (i of people) {
//     if (i=="Devon"){
//         console.log(i);
//         break;
//     }
    
// }
//ex 2
let colors = ['blue', 'red', 'green', 'purple', 'orange'];
let suffixes = ['st', 'nd', 'rd', 'th'];
for (let i = 0; i < colors.length; i++) {
    let suffixIndex = i <= 3 ? i : 3;
    console.log(`My ${i + 1}${suffixes[suffixIndex]} choice is ${colors[i]}`);
}