export class compteBancaire {
    // Constructor
    constructor(owner_name,balance){
        this.owner_name=owner_name;
        this.balance=balance;
    }
    // Méthode
    withdraw(amount){
        if(amount>this.balance){
            throw new Error("Votre solde n'est pas suffisant pour effectuer cette opération");
        }else if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else{
            return this.balance-=amount;
        }
    }
    deposit(amount){
        if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else
        return this.balance+=amount;
    }
    transfer(amount,target){
        if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else if(amount>this.balance){
            throw new Error("Votre solde n'est pas suffisant pour effectuer cette opération")
        }else if(typeof target =="undefined"){
            throw new Error("Le beneficiaire du virrement n'existes pas")
        }else{
            this.balance-=amount;
            target.balance+=amount;
        }
    }
}