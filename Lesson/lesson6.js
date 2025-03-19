//Exercise 1
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,

};

console.log(car.model);


//Exercise 2
car.color = "Black";
car.year = 2023;

console.log(car);


//Exercise 3
car.carInfo = function(){
    console.log('This car is a '+ car.brand + " " + car.model + " from " + car.year);
  }
car.carInfo();

//Exercise 4
for (let key in car){
    console.log(key + ': ' + car[key]);
}