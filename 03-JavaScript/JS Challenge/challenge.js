// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (yourNumber) => {
    
    if (yourNumber >= 0) {
        console.log(true);
    } else {
        console.log(false)
    }
}

isNumberPositive(3);
isNumberPositive(-3);
isNumberPositive(18);


// 2. Write a function that takes a number of days and converts it into an age.

const calculateAgeInYears = (ageInDays) => {
    const ageInYears = ageInDays/365;
    console.log(ageInYears);
}

calculateAgeInYears(3650);
calculateAgeInYears(6570);


// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (number1, number2, number3) => {
    if (number1 > number2 && number1 >number3) {
        console.log(number1);
    } else if (number2 > number1 && number2 > number3) {
        console.log(number2);
    } else {
        console.log(number3);
    }
}

getLargestNumber(2, 1, 4);
getLargestNumber(6, 2, 3);


// 4. Write a function that takes an array of names and returns the last name from the array of names.

let names = []

const getLastName = (names) => {
    console.log(names[names.length - 1])
}

getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash", "Stu"]);


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

