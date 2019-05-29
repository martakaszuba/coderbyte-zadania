

/*
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.
chunkArray(["a", "b", "c", "d"], 2) => [["a", "b"], ["c", "d"]].
chunkArray([0, 1, 2, 3, 4, 5], 4) => [[0, 1, 2, 3], [4, 5]].
*/

function chunkArray(arr,num){

    var newarr = [];
    for (var i=0; i<arr.length; i+=num){
        newarr.push(arr.slice(i,i+num));
    }
    return newarr;
    }
