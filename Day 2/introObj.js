//objects
let teacher = {
    fullName : 'Walter White',
    subject : 'Methamphetamin',
    role : 'Cook',
    salary : 5000000,
    method : function (){}
}

console.log(teacher.fullName);
console.log(teacher['fullName']);

//add or change properties

teacher.subject = 'How to make methamphetamin'
teacher.age = 52;

console.log(teacher);

//deleting object properties
delete teacher.age
console.log(teacher)


for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let myArray = [2, 5, 'hello', true, { key: 'value' }];

console.log(myArray);

let complicatedArray = [
    42,
    'Hello',
    true,
    {
      name: 'Frank',
      age: 30,
      hobbies: ['reading', 'coding', 'traveling'],
      address: {
        street: '127 Main St',
        city: 'HEHEHEA',
        country: 'Monsterland'
      }
    },
    [1, 2, 3],
    function greet() {
      return 'Greetings!';
    }
  ];
  
  console.log(complicatedArray);
  