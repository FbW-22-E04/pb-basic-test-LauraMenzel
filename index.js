// Add answers here 

//1. Los or New
// function nameOfCity(city){

//     if(city.startsWith('New') || city.startsWith('Los')){   

//     return city;
 
//     }
//     else{

//         return"The city name does not begin with Los or New";
    
//     }
// } 

// console.log(nameOfCity("New York"));
// console.log(nameOfCity("Los Angeles"));
// console.log(nameOfCity ("Dublin"));

console.log("------------------------------------------------------------------------------------------");

//2. isDivisible
// function isDivisible(integer){

//     if(integer % 100 === 0){
        
//         return "true";
//     }
    
//     else{

//         return "false";
//     }
// }

// console.log(isDivisible(5000));
// console.log(isDivisible(3));

// console.log("-----------------------------------------------------------------------------------------");



//3.What's the weather-not finished!

// function isRaining(weather){

    
//     let condition = weather == true ? "wet day" : "dry day - leave your umbrella at home";

    
// }

// console.log(isRaining(rainy));




//4.Sequenze

function geometricalSequence() {
  numbers = '';

  for (let i = 0; i < 9; i += 1) {
    numbers += ' ' + 2 ** i;
  }
  return "the number are " + numbers;
} 

console.log(geometricalSequence());


console.log("------------------------------------------------------------------------------------------");


//5. Multiples

function multiplesOfThree(){

    multiplers = '';

    for(let i = 0; i > 4; i ++){

        multiples += ' ' + 3 * i;
    }
    return "that's the string" + multiples
}

console.log(multiplesOfThree());




// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

