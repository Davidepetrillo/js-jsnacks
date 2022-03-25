let primaParola = prompt("Inserisci una parola a tuo piacere");
let secondaParola = prompt("Inserisci un'altra parola a tuo piacere");

if (primaParola.length < secondaParola.length){
    document.getElementById("primaRiga").innerHTML = `${primaParola}`;
    document.getElementById("secondaRiga").innerHTML = `${secondaParola}`;
} else if (primaParola.length > secondaParola.length){
    document.getElementById("primaRiga").innerHTML = `${secondaParola}`;
    document.getElementById("secondaRiga").innerHTML = `${primaParola}`;;
} else {
    document.getElementById("primaRiga").innerHTML = `Le due parole hanno lo stesso numero di letter : ${primaParola} - ${secondaParola}`;
}