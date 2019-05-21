
//isPowerofTwo(8) => true 2*2*2 = 8

function isPowerofTwo(num){
    if (num === 2){
        return true;
    }
    else if (num %2 !== 0){
      return false;
    }
    return isPowerofTwo(num/2);
}
