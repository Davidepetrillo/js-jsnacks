
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(`Il numero segreto scelto dal computer è ${secretNumber}`);

let tentativi = 0; 
let errore = "";
let numeroGiocatore = 0;
do {
    let input = prompt(errore + `Inserisci un numero compreso tra ${MIN} e ${MAX}`);
    numeroGiocatore = parseInt(input);
    tentativi++;
        
    if (numeroGiocatore > secretNumber) {
        errore = "Sbagliato! ";
      } else if (numeroGiocatore < secretNumber) {
        errore = "Sbagliato! ";
      } else if (numeroGiocatore == secretNumber) {
        alert(`Bravo! Hai indovinato dopo ${tentativi} tentativo/i.`);
  }
    } while (numeroGiocatore != secretNumber);

