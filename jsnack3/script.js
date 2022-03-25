let arrayVuoto = [];
for(let i=0; i<10; i++){
    let richiesta = parseInt(prompt("Inserisci un numero"));
    arrayVuoto.push(richiesta);
}
document.getElementById("primaRiga").innerHTML = arrayVuoto;
let sum = 0;
for (let i = 0; i < arrayVuoto.length; i++) {
    sum += arrayVuoto[i];
}
document.getElementById("secondaRiga").innerHTML = `La somma dei numeri all'interno dell'array è ${sum}`;


