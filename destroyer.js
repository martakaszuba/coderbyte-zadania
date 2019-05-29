

/*
You will be provided with an initial array followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
destroyer([1, 2, 3, 1, 2, 3], 2, 3) => [1, 1]
destroyer([2, 3, 2, 3], 2, 3) => return []
*/

function destroyer(arr){
    var numsArr = [...Array.from(arguments).slice(1)];
    for (var i=0; i<numsArr.length; i++){
        arr = arr.filter(function(val){
            return val !== numsArr[i]
        })
    }
    return arr;
}

