const totalIntegers = function(arr) {
    let total = 0

    if (typeof arr != "object"){
        return undefined
    }
    if (arr == null){
        return total
    }


    const nums = Object.values(arr).filter((int)=> Number.isInteger(int))
    if (nums.length >= 1){
        total += nums.length
    }

    const nestedArray = Object.values(arr).filter((elem)=> typeof elem == "object")

    
    for (const item of nestedArray){
        total += totalIntegers(item, total)
    }
    return total
};
// Do not edit below this line
module.exports = totalIntegers;
