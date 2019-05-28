

//isPrime(7) => true
//isPrime(20) => false

function isPrime(num){
    var count = 0;
    for (var i=2; i<num; i++){
        if (num % i === 0){
            count++;
        }
    }
    if (count >0){
        return false;
    }
    return true;
}
