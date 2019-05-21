

// removeDuplicates([1,1,2,2,2,3]) =>[1,2,3]
//first solution

function removeDuplicates(arr){
    var newarr = [];
    for (var i=0; i<arr.length; i++){
      if (newarr.includes(arr[i])){
        continue;
      }
      else {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }

  //second solution

  function removeDuplicates2(arr2){
    return Array.from(new Set(arr2));
  }