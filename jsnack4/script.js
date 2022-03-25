let richiesta = prompt("Inserisci il tuo nome");
let invitati = ["Antonio", "Maria", "Paolo", "Francesca", "Giuseppe", "Sonia", "Michele", "Lara", "Giovanni", "Simona", "Stefano", "Carla", "Angela", "Carmine", "Claudio", "Michela", "Angelo", "Anna"];

let utenteInvitato = false;

for (let i =0; i < invitati.length; i++){
    if (richiesta == invitati[i]){
        utenteInvitato = true;
    }
}
if (utenteInvitato == true){
    document.getElementById("primaRiga").innerHTML = `Ciao ${richiesta}, ti confermo il tuo invito. Non vediamo l'ora di vederti alla festa.`;
} else if (utenteInvitato == false) {
    document.getElementById("primaRiga").innerHTML = `Mi dispiace ${richiesta} ma il tuo nome non risulta nella lista degli invitati.`;
}
