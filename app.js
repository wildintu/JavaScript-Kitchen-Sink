//name
var name = 'Lexi';

//total US states
const states = 50;

//result of adding 5 and 4
var x = (5 + 4);

//Function declaration
function sayHello (num1, num2) {
    console.log('Hello World!');
    return num1 + num2;
}

sayHello(5,4);
//say Hello World! with function

function checkAge(age, name) {
    if (age <= 20) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge(21, 'Charles');
checkAge(27, 'Abby');
checkAge(18, 'James');
checkAge(17, 'John');

let veg =['Broccoli', 'Celery', 'Spinach', 'Kale'];
    for(index = 0; index < veg.length; index++) {
        console.log(veg[index]);
    }

let object1 = {
    name: 'Karen',
    age: 33,
}

let object2 = {
    name: 'Yoda',
    age: 10,
}

let object3 = {
    name: 'Kitty',
    age: 13,
}

let object4 = {
    name: 'Ted',
    age: 21,
}

let object5 = {
    name: 'Linda',
    age: 24,
}

checkAge(33, 'Karen');
checkAge(10, 'Yoda');
checkAge(13, 'Kitty');
checkAge(21, 'Ted');
checkAge(24, 'Linda');

function getLength(word) {
   if (word.length % 2 == 0) {
       return ('The world is nice and even!');
   } else {
       return ('The world is an odd place!');
   }
}

console.log(getLength('hello world'));

