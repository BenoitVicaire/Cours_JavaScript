export default class IMC {
    // Constructeur
    constructor(nom,poid,taille){
        this.nom=nom;
        this.poid=poid;
        this.taille=taille;
    }
    // Méthode
    imc_calcul(){
        return Math.round(this.poid/(this.taille**2))
    }
    display_imc(){
        console.log(`${this.nom} pese ${this.poid} kg et son imc est ${this.imc_calcul()}`)
    }
}