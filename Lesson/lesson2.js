//Exercise 1
let x = 15;
let y = 4;

console.log(x%y);

//Exercise 2
let a = '10';
let b = 10;
console.log(a === b);

//Exercise 3
let score = 75;
console.log(score >= 50 && score <= 100);

//Exercise 4
let age = 17;

if (age < 18 && age > 0) {
    console.log('Kid');
}
else if (age >= 18 && age < 60){
    console.log('Adult');
}
else if (age >= 60){
    console.log('Elder');
}
else{
    console.log('Something went wrong');
}