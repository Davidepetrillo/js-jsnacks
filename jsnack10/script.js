let richiestaNumero = prompt("Inserisci un numero di 4 cifre.");
let numeroDiProva = "2345";
if (richiestaNumero.length != numeroDiProva.length){
    document.getElementById("primaRiga").innerHTML = `Mi dispiace ma il numero da lei inserito non corrisponde alla richiesta. La preghiamo di riprovare.`;
} else {
            
    document.getElementById("primaRiga").innerHTML = `Il numero da lei inserito è ${richiestaNumero}.`;
    let richiestaNumeroInt = parseInt(richiestaNumero);

    sommaDelleCifre();
            
    function sommaDelleCifre(){

    let somma =0;
                
    while (richiestaNumeroInt > 0){
    let resto = richiestaNumeroInt % 10;
    somma = somma + resto;
    richiestaNumeroInt = ((richiestaNumeroInt - resto)/ 10);
    }

    document.getElementById("secondaRiga").innerHTML = `La somma delle 4 cifre che compongono il numero da lei inserito è ${somma}.`;

    }
}