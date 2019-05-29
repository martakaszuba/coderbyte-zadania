
/*
all combinations of pluses and minuses
plusMinus(2) => [["-", "-"], ["-", "+"], ["+", "-"], ["+", "+"]]
plusMinus(3) => [["-", "-", "-"], ["-","-", "+"], ["-","+", "-"], ["+", "-". "-"],["-", "+", "-"]] etc...
*/

function plusMinus(num){
    var arr = ["+", "-"];
    var comboArr = [];
    var len = Math.pow(2,num);
    for (var i=0; i<len; i++){
        var str = "";
        var numBin = i.toString(2);
        while (numBin.length<num){
            numBin = "0"+numBin;
        }
        numBin = numBin.split("")
        numBin.forEach(function(val){
        str += arr[Number(val)]
        })
        str = str.split("");
        comboArr.push(str);
    }
    return comboArr;
}

    