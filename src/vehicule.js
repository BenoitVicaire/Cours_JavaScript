export default class Vehicule{

    //Constructeur
    constructor(nom_Vehicule,nbr_Roue,vitesse){
        this.nom=nom_Vehicule;
        this.roues=nbr_Roue;
        this.vitesse=vitesse;
    }
    //Méthode
    detect(){
        if (this.roues==2){
            return "Moto";
        }else if(this.roues==4) {
            return "Voiture";
        }else if (this.roues==1){
            return "MonoCycle";
        } else {
            return "qu'est ce donc que ce drole de vehicule?";
        }
    };

    boost(vitesse_boost){
        this.vitesse+=vitesse_boost;
    }
    plusRapide(vehicule){
        if(this.vitesse > vehicule.vitesse){
            return ` ${this.nom} est plus rapide que ${vehicule.nom}`;
            
        } 
        else{
            return `${vehicule.nom} est plus rapide que ${this.nom}`;
        }
    }
}
