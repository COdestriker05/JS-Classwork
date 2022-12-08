

// console.log('hello world')

// creating a variable

// let num;
// num=40
// console.log(num)

// let num=40,message='greeting'

// automatically adds a semicolon
// let num=10,msg='hello'; console.log(num,msg);  
// indentaion is not required in JS but we follow it because it makes code be readable.


// Interaction predefined function
// alert('Hello World')

// To trake input value from user
// let askFromUser=prompt("Enter the value:")
// console.log(askFromUser)

// let isProgrammer=confirm('Are u a proogrammer')
// console.log(isProgrammer)

// single line comment
/* let
a=
10 multiline comment */

// common datatypes
// string => texts
// Numbers => int as well as float
// Arrays => ordered pair of number [12,45,95]
// Objects => key value pair {name:'John'}
// Boolean => true or false

// {} => a block

// Conditional Statement
/* if (true) {
    alert('Hello')
}
alert('world') */

// let year = 2012
// if (year==2022){
//     alert('You are so smart')
// }else{
//     alert('You are so dumb')
// }

let age = prompt("How old are you?")
if (age < 18){
    alert('Access not allowed')
}else if (age < 20){
    alert("You have limited access")
}else{
    alert("Here is your pass to the theater")
}