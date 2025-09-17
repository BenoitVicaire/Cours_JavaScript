class Habitation {
   //Constructeur
    constructor(nom_maison, largeur_maison, longueur_maison,nombre_etage) {
        this.nom = nom_maison;
        this.largeur = largeur_maison;
        this.longueur = longueur_maison;
        this.nbrEtage = nombre_etage;
    }
   //Méthode
    superficie() {
        return this.largeur * this.longueur * this.nbrEtage;
    }
}

const villa = new Habitation("villa", 15, 8 , 1);
const maison = new Habitation("maison", 20, 12 , 1);
const ascienda = new Habitation("Ascienda", 30, 20 , 2);

console.log(`L'habitation ${ascienda.nom} à une superficie de ${ascienda.superficie()} m²`);
