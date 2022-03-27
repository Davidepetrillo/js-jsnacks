
let arrayDiNumeri = [];
for(i = 0; i < 10; i++){
let richiestaUtente = parseInt(prompt("Inserisci un numero"));

arrayDiNumeri.push(richiestaUtente);
    
}
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
}

function mediaAritmetica(arrayDiNumeri) {
    let i = 0, somma = 0;
    while (i < arrayDiNumeri.length) {
        somma = somma + arrayDiNumeri[i++];
}
    return somma / arrayDiNumeri.length;
}