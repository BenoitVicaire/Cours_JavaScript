import Vehicule from "./vehicule.js";


const voiture = new Vehicule("Mercedes CLK",4,250);
const moto = new Vehicule("Honda CBR",2,280);


console.log(voiture.detect());
console.log(moto.detect());

console.log(voiture.vitesse);
console.log(voiture.plusRapide(moto));
voiture.boost(50);
console.log(voiture.vitesse);
console.log(moto);
console.log(voiture);
console.log(voiture.plusRapide(moto));
voiture.boost(-50);
console.log(voiture);


