/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let positive=[1,2,3,4,5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let me={
    name:"Sabin",
    surname:"Andrei",
    emailAdress:"sabinandrei125@gmail.com",
    age:"21",
}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

me.drivingLicense=true
console.log(me)



/* EXERCISE 4
 Remove from the previously created object the age property.
*/
info=[]
info.push(me)
delete info[0].age
console.log(info)



/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let someone={
    name:"name",
    surname:"surname",
    emailAdress:"email"
}
if(me.emailAdress===someone.emailAdress){
    console.log("They are the same address")
}else{
console.log("They are not the same address")
}
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart=40

if(totalShoppingCart>=50){
    console.log(freeShipping=true)
}else{
    
    console.log("Your total amount is:",totalShoppingCart +=10)
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("------------------------exerceise7--------------------")

if(totalShoppingCart>=50){
    console.log("Your total amount is:",totalShoppingCart-totalShoppingCart/5)
    console.log("Free shipping:",freeShipping=true)
}else{
    
    console.log("Your total amount is:",totalShoppingCart +=10- (totalShoppingCart +=10)/5)
}



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("---------------------exercise8----------------")
let car={
    brand:"brand",
    model:"model",
    licensePlate:"license"
}
for(let i=0; i<5;i++){
    
    
    if(i===1){
        car.licensePlate="license2"
    }else if(i===2){
        car.licensePlate="license3"
    }else if(i===3){
        car.licensePlate="license4"
    }else if(i===4){
        car.licensePlate="license5"
    }
    car.licensePlate[i]
    console.log(car)
}

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/


console.log("--------------------Exercise9----------------------------")

let carsForRent=[
    { brand: 'brand', model: 'model', licensePlate: 'license' },
    { brand: 'brand', model: 'model', licensePlate: 'license2' },
    { brand: 'brand', model: 'model', licensePlate: 'license3' },
    { brand: 'brand', model: 'model', licensePlate: 'license4' },
    { brand: 'brand', model: 'model', licensePlate: 'license5' }
]


 
console.log(carsForRent)
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("------------------exercise10----------------")

carsForRent.splice(0,1)
carsForRent.pop()
console.log(carsForRent)
/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("---------------------exercise11--------------------------")

console.log(car.brand)
console.log(car.model)
console.log(car.licensePlate)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("----------------------------exrecise12------------------------")
let carsForSale=[
    car1={
        brand:"brand1",
        model:"model1",
        licensePlate:"license6"

    },
    car2={
        brand:"brand2",
        model:"model2",
        licensePlate:"license7"

    },
    car3={
        brand:"brand3",
        model:"model3",
        licensePlate:"license8"

    }
]



let totalCars=carsForSale.concat(carsForRent)
console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("---------------------exercise13------------------")
for(let i=0;i<carsForSale.length;i++){
    console.log(carsForSale[i])
}
