// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

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