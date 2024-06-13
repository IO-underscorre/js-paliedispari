// Random number generator between max and min (included)
function randomNumberGenerator(min , max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

// Sum of 2 numbers
function mySum(number1 , number2) {
    return number1 + number2;
}

// Number comparison: if num1 is higher returns true, if num2 is higher or equal returns false
function evenNumberCheck(number) {
    return number % 2 === 0 ? true : false ;
}