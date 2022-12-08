// While (condition){}  (syntax)

// let i = 0
// while(i < 5){
//     console.log(i)
//     i++
// }

// i=5
// while(i){ i != 0
//     console.log(i)
//     i--
// }

// let i = 3
// while(i) console.log(i--)


// Do While loop

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i < 5)

// let x = 0
// while(x < 5){
//     console.log(x)
//     x++
// }


// Difference b/w Do and While loop

// do{
//     console.log('hello world')
// }while(false)

// while(false){
//     console.log('hello world')
// }


// For Loop

// for(begin;condition;step){ .. //syntax

//}

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }


// Skippiing the parts
// let i = 0
// for (; i < 11;){
//     console.log(i++)
// }

// let sum = 0
// while(true){
//     let value = prompt("Enter a no.",'')


//     sum = sum + value

//     break

// }
// alert('Sum: ' +sum)  
// above code is not working

let i = 0
while(i<10){
    if (i == 5) break
    console.log(i)
    i++
}