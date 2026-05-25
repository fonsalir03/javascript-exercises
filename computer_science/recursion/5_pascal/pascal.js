const pascal = function(n) {
  
    if (n == 1){
        return [1]
    }

    if (n==2){
        return [0+1,1+0]
    }

    let row = pascal(n-1)
    
    let newRow = [1]
    for (i=0; i<row.length; i++){
        newRow.push(row[i]+row[i+1])
    }
    newRow[newRow.length-1] = 1

    return newRow
};

res = pascal(5)
console.log(res)  

// Do not edit below this line
module.exports = pascal;
