let arrayDiNumeri = [2,4,6,5,9,8,1,7,6,3 ];
document.getElementById("primaRiga").innerHTML = `[${arrayDiNumeri}]`;

sommaNumeri();
let risultatoMedia = mediaAritmetica(arrayDiNumeri);
document.getElementById("terzaRiga").innerHTML = `La media aritmetica dei numeri contenuti nell'array è ${risultatoMedia}`;

function sommaNumeri (){

    let somma = 0;
    for (let i = 0; i < arrayDiNumeri.length; i++) {
        somma += arrayDiNumeri[i];
    }
    document.getElementById("secondaRiga").innerHTML = `La somma dei numeri contenuti nell'array è ${somma}`;
    //console.log(somma);
}

function mediaAritmetica(arrayDiNumeri) {
    var i = 0, summ = 0, ArrayLen = arrayDiNumeri.length;
    while (i < ArrayLen) {
        summ = summ + arrayDiNumeri[i++];
}
    return summ / ArrayLen;
}