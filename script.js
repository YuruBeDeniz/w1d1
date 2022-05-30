// javascript intro
window.console.log('Hello world!!😊')
console.table(['a', 'b', 'c'])
console.error('this is an error shueee')


//variables - named storage

//declare a variable
let user;
console.log(user) // this is undefined in the console.

//assing a value to a variable
user = 'Deniz';
console.log(user);

// initializing a variable
let cat = 'tom';
//let mouse;
// let dog;

//in one line:
let mouse, dog;


// use const whenever possible

console.clear() // to clear console

// js is dinamically typed:
let num = 23;
console.log (typeof num)

num = '32';
console.log(typeof num);

console.clear()

//number
let distance = 9000;
let price = 19.99;

console.log('hello world' * 2) // console: NaN (not a number)

//shorthand writing
let x = 0;

//increment x by 1
x = x + 1 //or:
x += 1

// even shoter when you want to increment by 1:
x++

// x-- >> substracted by 1

//accessing charaters in the string

let greeting = 'hello'
console.log(greeting.charAt(0)); //or:
console.log(greeting[0]);

//string properties

console.log(greeting.length);
 // to access the last char of a string
 console.log(greeting[greeting.length-1]);

 //indexOf returns the index of a char:
 console.log(greeting.indexOf('l')) // console:2
 //last index of
 console.log(greeting.lastIndexOf('l')) //console: 3

 //if the char is not found:
 console.log(greeting.indexOf('x')) // console: -1 

 //use includes to check if sth is contained in a string:
 const s = 'hello'
 console.log(s.includes('e')) // either true or false. console: true

 //slice returns a substring of a string:
 const sliced = 'hello';
 console.log('hello'.slice(0)) //console: hello;
 console.log('hello'.slice(1)) //console: ello
 console.log('hello'.slice(0, 2)) // console: he

 //strings are immutable
 let name = 'deniz'

 console.log(name.toUpperCase()) //console: DENIZ

 console.log(name) //console: deniz >> not capitalized as strings are immutable.


 console.clear()

 let hacker = 'deniz'

 hacker = hacker.slice(0, 1).toUpperCase() + hacker.slice(1)

 //alternative: try to use as much as variables for the purpose of readability:
 // const firstCharacter = hacker.charAt[0].upperCase()
 //const rest = hacker.slice(1)
 // hacker = hacker.charAt[0].upperCase() + hacker.slice(1)

 console.log(hacker)


 // undefined and null
 //undefined is the unintentional absense of a value.
 //null is the intentional absense of a value.

 //boolean operators: < > <= >= and equality

 // 4 == '4' || 4 == 4 >> true
 // 4 === '4' >> false
 // === stricly equal, it also checks the type.

 // '4' !== '4' >> false

 console.log(5>4 || 4<3) //console: true

 //conditionals:
 if(5>3){
     console.log('this is true')
 }

//truthy or falsy values:
let password = '';
//check if the password is set:(checking if it is empty)
if (password === ''){
    console.log('not set');
} else {
    console.log('is set');
}

//or:
/* if(!password){
    console.log('not set');
} else {
    console.log('is set');
} */

// every number is truthy except for 0. empty string is also falsy



/*const age = prompt('What is your age?') *1;
console.log(age);
if(age>=18){
    console.log('you can drive');
} else if(age === 17){
    console.log('you can drive with your parents')
} else{
    'you cannot drive'
} */

//switch case
/*const language = prompt('What is your language?')

switch (language){
    case 'french':
        console.log('bonjour');
        break;
    case 'english':
        console.log('hello');
        break;
    default:
        console.log('language not recognized');
}; */

// if 'break' statement is not added; even though french is detected; it will console log the other cases too.

//while loop:
/*let i = 1;
while(i<11){
    console.log(i);
    i++
}*/

let userPassword;

//show the prompt asking for password
//if the password is correct:
// -> alert('access granted')
//not correct -> show the prompt again:
while (userPassword !== '123'){
    userPassword = prompt('what is the password?')
}
//if we reach this line the password is correct:
alert('access granted')