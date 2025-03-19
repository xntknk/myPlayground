//Exercise 1
const profile = {
    firstName: 'Nattakit',
    lastName: 'Naikon',
    age: '23'
}
const {firstName, lastName, age} = profile;
console.log(firstName);
console.log(lastName);
console.log(age);

//Exercise 2
const colors = ['Red','Green','Blue'];
const [color1, color2, color3] = colors;
console.log(color1, color3);

//Exercise 3
const fruits1 = ["Apple", "Banana"];
const fruits2 = [...fruits1, "Mango"];
console.log(fruits2);

//Exercise 4
function multiplyAll(...nums){
    return nums.reduce((total, num) => total * num, 1);
}
console.log(multiplyAll(2,3,4));

//Exercise 5
const myName = "Ex";
const city = 'Bangkok';
console.log(`Hello, my name is ${myName} and I am from ${city}.`);

//Exercise 6
function calculateArea(width, height = 10){
    console.log(`Width = ${width}, Height = ${height}`);
}

calculateArea(10,);
