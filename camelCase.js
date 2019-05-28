

//camelCase("ola_kwiatkowska") => olaKwiatkowska
//camelCase("nie_daj_sie") => nieDajSie

function camelCase(txt){
    txt = txt.split("");
    while(txt.includes("_")){
    var index = txt.indexOf("_");
    txt[index+1] = txt[index+1].toUpperCase();
    txt.splice(index,1);
    }
    return txt.join("");
}

