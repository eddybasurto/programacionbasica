function arrayNum() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    if (isNaN(n1) == true ){
        alert("Primer número no válido");
        document.validanum.num1.focus();
        return false;
    }
    else if (isNaN(n2) == true ){
        alert("Segundo número no válido");
        document.validanum.num2.focus();
        return false;
    }
    document.validanum.rango.value = ("NÚMEROS ENTRE "+ n1 + " y " + n2);
    var aNum = [];
    var nElemento=0, sInter = "";
    while (n1 <= n2){
        aNum[nElemento] = n1;
        console.log("aNum[" +nElemento+"]= " + aNum[nElemento]);
        sInter = sInter + aNum[nElemento] + ",";  
        nElemento += 1;
        n1 += 1;
    }
    aNum.forEach(element => {
        console.log(element)        
    });
    document.validanum.res.value = sInter; 
}