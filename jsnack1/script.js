var numero1 = parseInt(prompt("Inserisci il primo numero"));

var numero2 = parseInt(prompt("Inserisci il secondo numero"));

if (numero1 > numero2){
    document.getElementById("risultato").innerHTML = `Il primo numero (${numero1}) è più grande del secondo numero`;
} else if (numero1 < numero2){
    document.getElementById("risultato").innerHTML = `Il secondo numero (${numero2}) è più grande del primo numero`;
} else {
    document.getElementById("risultato").innerHTML = `I due numeri sono uguali`;
}