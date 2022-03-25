let arrayVuoto = [];
for(let i = 0; i < 6; i++ ){
    let domandaUtente = parseInt(prompt("Inserisci un numero"));
    if(domandaUtente %2 != 0){
arrayVuoto.push(domandaUtente);
    }
}
document.getElementById("primaRiga").innerHTML = arrayVuoto;



