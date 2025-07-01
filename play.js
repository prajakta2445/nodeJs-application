var name = 'Praj';
var age = 27;
var hasHobbies = true;


// //pure function does not depend any outside function but is work with data as part of argument
// function summarizeUser(userName, userAge, userHobbies) { 
//     return(
//         'Name is ' + userName + ', age is ' + userAge + ' and the user hobbies are: ' + userHobbies
//     )
// }


// // Annonimous function
// const summarizeUser = function (userName, userAge, userHobbies) { 
//     return(
//         'Name is ' + userName + ', age is ' + userAge + ' and the user hobbies are: ' + userHobbies
//     )
// }


// arrow function
const summarizeUser = (userName, userAge, userHobbies) => { 
    return(
        'Name is ' + userName + ', age is ' + userAge + ' and the user hobbies are: ' + userHobbies
    )
}
// const add = (a, b) => a+b
// const addOne = a => a+1; // with single argument
// const addRandom = ()=>1+2; //with no arg


console.log(summarizeUser(name, age, hasHobbies))




const person = { 
    uName : 'Praj',
    uAge : 27,
    // greet:() => {
    //     console.log("Hi, I am " + this.name) // this keyword is take global scope as it is is arrow function
    // }
    greet() {
        console.log("Hi, " + this.name)
    }
}
person.greet() //

const hobbies = ['sports', 'cooking'] 
//reference types only store an address pointing at the place in memory 
// where that array is stored and that pointer this address has not changed by us adding a new element.

const pushedArr = hobbies.push('Programming')//add element in existing array
console.log(hobbies) //[ 'sports', 'cooking', 'Programming' ]

// for ( let hobby of hobbies){
//     console.log(hobby)
// }
const mappedArr = hobbies.map(hobby =>{
    return 'Hobby :'+hobby
})//gives new array 
console.log(mappedArr) //[ 'Hobby :sports', 'Hobby :cooking', 'Hobby :Programming' ]


// spred operator actually extract all elements of existing array and inserted to new copied array
const spredOperatorArr = [...hobbies] 
console.log(spredOperatorArr)//[ 'sports', 'cooking', 'Programming' ]
const copiedObj = {...person}
console.log(copiedObj) //{ name: 'Praj', age: 27, greet: [Function: greet] }


//Rest operator using to merge multiple arguments into array and use it in arguments list of a of function
const toArray = (...args) =>{
    return args
}
console.log(toArray(1,2,3,4)) // [1,2,3,4]


//Destructing object : what we need from the incoming object and which then gets stored in a local
// variable that we can just use in the function, no structing inside function
const  { uName, uAge} = person // required same name mentioned in obj
console.log(uName) //Praj
const [hobby1, hobby2]= hobbies // allow to use any name here
console.log(hobby1) // sports



// you can dynamically add data into a string like this:
const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);
// This is of course shorter and easier to read than the "old" way of concatenating strings:
const name = "Max";
const age = 29;
console.log("My name is " + name + " and I am " + age + " years old.");