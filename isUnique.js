
/*
if each character in string appears only once
isUnique("abcdef") => true
isUnique("abbcf") => false
*/

//first solution

function isUnique(str){
    str = str.split("");
    str.sort();
    var count = 0;
    for (var i=0; i<str.length-1; i++){
        if (str[i] === str[i+1]){
            count++;
        }
    }
    if (count === 0){
        return true;
    }
    return false;
}

//second solution

function isUnique(str){
    var uniqueArr = Array.from(new Set(str));
    return str.length === uniqueArr.length;
}
    