let numeroSceltoDallUtente = parseInt(prompt("Inserisci un numero"));
document.getElementById("primaRiga").innerHTML = `Il numero che hai scelto è ${numeroSceltoDallUtente}.`;
cubo();

function cubo (){
let esponenziale = numeroSceltoDallUtente**3;
document.getElementById("secondaRiga").innerHTML = `Il cubo del numero ${numeroSceltoDallUtente} è ${esponenziale}.`;
}
