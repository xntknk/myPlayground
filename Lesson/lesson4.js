//Exercise 1
let myFavFoods = ['Tomyum', 'Krapow', 'Somtum'];
console.log(myFavFoods[1]);

//Exercise 2
let myHobbies = ['Games', 'Gym', 'Music'];
myHobbies.push('Badminton');
myHobbies.pop();
console.log(myHobbies);

//Exercise 3
let techStack = ['HTML', 'CSS', 'JS', 'Ruby', 'C+'];
techStack.splice(1, 2, "Python", "Go");
console.log(techStack);

let smallTech = techStack.slice(0, 3);
console.log(smallTech);

//Exercise 4
let numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++){
    console.log("Numbers: " + numbers[i]/2);
}