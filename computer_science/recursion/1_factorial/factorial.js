const factorial = function(int) {
//if int is zero, return one
if (int == 0){
    return 1
} else if (int < 0 || Number.isInteger(int) == false){
    return undefined
}
return int * factorial(int - 1)
//otherwise, return the function with int minus one
};

// Do not edit below this line
module.exports = factorial;