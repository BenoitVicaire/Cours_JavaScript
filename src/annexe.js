export class Employee {
    // Constructor
    constructor(nom,prenom,age,salaire_mensuel,mois_paye,charge){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.salaire=salaire_mensuel;
        this.mois_paye=mois_paye;
        this.charge=charge;
    }
    // Methodes
    
}

    // Constructor
export class Pme {
    constructor(nom,employe_list,revenu,frais_fixe,frais_achat){
        this.nom=nom;
        this.employe_list=employe_list;
        this.revenu=revenu;
        this.frais_fixe=frais_fixe;
        this.frais_achat=frais_achat; 
    }
    // Methodes
    bilan_comptable(){
        let salaire_total_and_charge=0;
        for(const employe of this.employe_list){
            salaire_total_and_charge+=((employe.salaire+(employe.salaire*employe.charge/100))*employe.mois_paye);
            
        }
        return (this.revenu-(salaire_total_and_charge+this.frais_fixe+this.frais_achat))
    }
    display_bilan(){
        if (this.bilan_comptable()>0){
            console.log(`L'entreprise ${this.nom} est en benefice de ${this.bilan_comptable()}`)
        }
        if (this.bilan_comptable()==0){
            console.log(`L'entreprise ${this.nom} est à l'équilibre, mais faudrais pas mettre un sucre de plus dans le café : ${this.bilan_comptable()}`)
        }
        if (this.bilan_comptable()<0){
            console.log(`L'entreprise ${this.nom} est en deficit de ${this.bilan_comptable()} va falloir penser a faire du remaniement`)
        }
    }
    remaniement(){
        let overpayed=0;
        let coupable = null;
        for(const employe of this.employe_list){
            if(employe.salaire>overpayed){
                overpayed=employe.salaire;
                coupable=employe;
            }
        }
        console.log(`Compte tenu de l'outrageux salaire de ${coupable.nom} il serait judicieux de restructurer son contrat, en effet chaque année a lui seul il coute ${overpayed+(overpayed*coupable.charge/100)}€`)
    }        
}