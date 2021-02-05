function calculaImc() {
    var iPeso = document.formu.peso.value;
    var iAltura = document.formu.altura.value;
    /*
    var iAltura = prompt("Cual es tu altura?:");
    */
    if (isNaN(iPeso) == true) {
        alert('Peso no válido');
        return false;
    }
    else if (isNaN(iAltura) == true) {
        alert('Altura no válida');
        return false;
    }
    var iImc = iPeso / Math.pow(iAltura, 2);
    var iImcR = Math.round(iImc * 100) / 100;
    if (iImcR < 18.50) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Peso insuficiente");
    }
    if (iImcR > 18.50 && iImcR < 24.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Normal de peso");
    }
    if (iImcR > 25 && iImcR < 26.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Sobrepeso grado I");
    }
    if (iImcR > 27 && iImcR < 29.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Sobrepeso grado II (preobesidad)");
    }
    if (iImcR > 30 && iImcR < 34.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Obesidad de tipo I");
    }
    if (iImcR > 35 && iImcR < 39.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Obesidad de tipo II");
    }
    if (iImcR > 40 && iImcR < 49.99) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Obesidad de tipo III (mórbida)");
    }
    if (iImcR > 50) {
        alert("Para un peso de " + iPeso + "kg y una altura de " + iAltura + "mts su IMC es de: " + iImcR + " Obesidad de tipo IV (extrema)");
    }
    return true;
}