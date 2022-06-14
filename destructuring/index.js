// Destructuring is a way to extract values from array or object into distinct variables - ES6 feature.
// array= ["Rekha",35,true,"krefeld"]
// const [name,age,status,city] = array;
// console.log(name,city)

// extract only name and city from array
//const [name, , ,city] = ["Rekha",35,true,"krefeld"]
//console.log(name,city)

// let data = ["sum",2,4,5,6,7]
// const [operator, ...numbers] = data; //using spread/Rest operator
// console.log(numbers)
// console.log(operator)
// // rest element must be declared at the last in the array
// //const [operator, ...numbers,a,bool] = data; // this will not work as the rest operator is not the last one.

// //set default value
// let myData = ["John", "FBW32",true, 25,"Berlin"];
// const [name,className,status,age=20,city,country="Germany"]= myData;
// console.log(age,country)

//destructuring oBject
// let user = {
//     name:"Lena",
//     //age:23,  //commented to set the default value
//     city:"krefeld",
//     address : {
//         street :40,
//         house : 48
//     }
// }
//ES5
// console.log(user.name)

// let city = user.city;
// let name = user.name;
// let age = user.age;

// console.log(name,age,city)

//Instead of this we user ES6 destructuring
// const {city,name,age}= user //position does not matter but use same variable names.
// console.log(city,name,age) // use same variable name in the object (keys) and destructuring variable name

// let user = {
//     name:"Lena",
//     //age:23,  //commented to set the default value
//     city:"krefeld",
//     address : {
//         street :40,
//         house : 48
//     }
// }
//set default value
//const {name,age = 40,city,address:{street,house}}=user // address cannot be a variable as we have destructured
// const {name,age = 40,city,address}=user
// const {street,house} = address
// console.log(city,name,age,street)
// console.log(address.house)

// //Nested array destructuring
// let myData = ["Lisa","FBW32",true,[32,"Berlin"],[1,2,3,4]]
// // const [name,className,status,userData,numbers]=myData
// // console.log(userData[0])  //use the variable inside the userData array
// const [name,className,status,[age,city],[n1,n2,n3,n4]]=myData
// console.log(age,city,n1,n4)  // destructure the nested array


// function printUser(student){ // indtead of writing student here we can use object notation
//function printUser({name,age}){ or use destructuring inside the function
// function printUser(student){
//     const {name,age} = student;
// //console.log(`Student Name is : ${student.name},Student age is ${student.age} years old`)
// console.log(`Student Name is : ${name},Student age is ${age} years old`)
// }
// printUser({name:"Lena",age:23})

// function createUser(name,age,city){
//     return{
//         name:name,
//         age:age,
//         city:city
//     }
// }
// // const user = createUser("sima",24,"Berlin")
// const {name,age,city} = createUser("sima",24,"Berlin")
// console.log(name,age,city)

// function createSecretCodes(){
//     let codesArr = []
//     for(let i = 0; i< 5; i++){
//         codesArr.push(Math.ceil(Math.random()*1000000))
//     }
//     return codesArr;
// }
// //let codes = createSecretCodes();//[ 937586, 460077, 678944, 976668, 661179 ]
// let [code1,code2,code3,code4,code5] = createSecretCodes(); //destructuring here happens
// console.log(code1,code2,code3,code4,code5) //301566 147116 193410 187740 103728

// Exercise 1
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// */
// {
//   console.log("EXERCISE 1");
//   let item = ["Egg", 0.25, 12];
//   let name = item[0];
//   let price = item[1];
//   let quantity = item[2];
//   console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
//   console.log();
// }
console.log("EXERCISE 1");
let [name, price, quantity] = ["Egg", 0.25, 12];
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
console.log();

// Exercise 2
// Rewrite the code below to assign each number to the right variable.
// */
// {
//   console.log("EXERCISE 2");
//   let numbers = [3, 5, 4, 2, 6, 1];
//   let [one, two, three, four, five, six] = numbers;
//   console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
//   console.log();
// }
console.log("EXERCISE 2");
let [one, two, three, four, five, six] = [3, 5, 4, 2, 6, 1];
console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
console.log();

// Exercise 3
// We have an object called 'user'.
// Write the destructuring assignment that reads:
// - 'name' property into the variable 'name'.
// - 'years' property into the variable 'age'.
// - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
// */
// {
//   console.log("EXERCISE 3");
//   let user = { name: "John", years: 30 };
//   // your code to the left side:
//   let {} = user;
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(isAdmin); // false
//   console.log();
// }
console.log("EXERCISE 3");
let user = { name1: "John", years: 30 };
let { name1, years, isAdmin = false } = user;
console.log(name1);
console.log(years);
console.log(isAdmin);

// Exercise 4
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// */
// {
//   console.log("EXERCISE 4");
//   let person = [12, "Chris", "Owen"];
//   let firstName = person[1];
//   let lastName = person[2];
//   let age = person[0];
//   console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
//   console.log();
// }
console.log("EXERCISE 4");
let [firstName, lastName, age] = ["Chris", "Owen", 12];
console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
console.log();

// Exercise 5
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// Make sure not to have unused variables.
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 5");
//   let person = ["Chris", 12, "Owen"];
//   let firstName = person[0];
//   let lastName = person[2];
//   console.log(`Name: ${firstName} ${lastName}`);
//   console.log();
// }
console.log("EXERCISE 5");
let [firstName1, , lastName1] = ["Chris", 12, "Owen"];
console.log(`Name: ${firstName} ${lastName}`);
console.log();

// Exercise 6
// Using Array Destructuring get the last name from the array. 
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 6");
//   const students = ['Christina', 'Jon', 'Alexandare'];
//   // Write your code here
//   const [] = students;
//   console.log(lastName);
//   console.log();
// }
console.log("EXERCISE 6");
const students = ['Christina', 'Jon', 'Alexandare'];
const [, , lastName2] = students;
console.log(lastName2);
console.log();

// Exercise 7
// Using Array Destructuring get all of the names from this Nested Array
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 7");
//   const moreStudents = [
//     'Chris', 
//     ['Ahmad', 'Antigoni'], 
//     ['Toby', 'Sam']
//   ];
//   // Write your code here
//   const [] = moreStudents;
//   console.log(student1, student2, student3, student4, student5);
//   console.log();
// }
console.log("EXERCISE 7");
const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
];
const [student1, [student2, student3], [student4, student5]] = moreStudents;
console.log(student1, student2, student3, student4, student5);
console.log();