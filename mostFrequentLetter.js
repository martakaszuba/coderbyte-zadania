
//mostFrequentLetter("kokos") => Najcześciej występujące litery to: o,k

function mostFrequentLetter(str){
    if (str == ""){
      return undefined;
    }
      str = str.split("");
      var obj = {};
      var letters = [];
      for (var i=0; i<str.length; i++){
          if (obj[str[i]] === undefined){
              obj[str[i]] = 1;
          }
          else {
              obj[str[i]] +=1;
          }
      }
  
      var max = Math.max(...Object.values(obj));
      if (max === 1){
        return "Nie ma litery która występuje najczęściej";
      }
      for (var x in obj){
        if (obj[x] === max && max >1){
          letters.push(x);
        }
      }
  
  if (letters.length === 1){
    return `Najcześciej występująca litera to: ${letters[0]}`;
  }
  
  letters = letters.join(",");
  return `Najczęściej występujące litery to: ${letters}`;
  }