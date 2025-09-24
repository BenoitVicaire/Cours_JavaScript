import "./style.css";
import {compteBancaire} from "./annexe.js";

const account_name = document.getElementById("account_name");
const bt_create = document.getElementById("bt_create");
const id_account = document.getElementById("id_account");
const id_amount = document.getElementById("id_amount");
const bt_deposit = document.getElementById("bt_deposit");
const bt_withdraw = document.getElementById("bt_withdraw");
const id_source = document.getElementById("id_source");
const id_target = document.getElementById("id_target");
const id_transfert = document.getElementById("id_transfert");
const bt_transfert = document.getElementById("bt_transfert");
const id_message = document.getElementById("id_message");

const account_list =[];

// Créer un nouveau compte et l'ajouter a la account_list
bt_create.addEventListener("click", ()=>{
    if(account_name.value.trim()==""){
        throw new Error("Champs vide")
    }else{
            account_list.map(account=>{
                if (account.owner_name===account_name.value){
                    id_message.style.color="red";
                    id_message.textContent=`Ce compte existe déja`
                    throw new Error("Le compte existe déja")
                }
            })
            account_list.push(new compteBancaire(account_name.value,0));
            console.log(account_list);
            id_message.textContent=`Le compte ${account_name.value} à bien était créer`
        }
    
})

// Deposer
bt_deposit.addEventListener("click", ()=>{
    const amount=Number(id_amount.value)
    if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else if(id_account.value.trim()==""){
            throw new Error("Champs vide");
        }else if (isNaN(amount)){
            throw new Error("Montant invalide");
        }else{
            const account= account_list.find(acc => acc.owner_name===id_account.value);
            if (!account){
                throw new Error ("Ce compte n'existe pas")
            }
            account.deposit(amount);
            id_message.style.color="black";
            id_message.textContent=`${amount}€ ont était ajouté au solde de ${account.owner_name}
            son nouveau solde est : ${account.balance}€`
        }
})
// Retirer
bt_withdraw.addEventListener("click", ()=>{
    const amount=Number(id_amount.value);
    if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else if(id_account.value.trim()==""){
            id_message.style.color="red";
            id_message.textContent="Champs vide"
            throw new Error("Champs vide");
        }else if (isNaN(amount)){
            id_message.style.color="red";
            id_message.textContent="Montant invalide"
            throw new Error("Montant invalide");
        }else{
            const account= account_list.find(acc => acc.owner_name===id_account.value);
            if (!account){
                id_message.style.color="red";
                id_message.textContent="Ce compte n'existe pas"
                throw new Error ("Ce compte n'existe pas")
            }
            account.withdraw(amount);
            id_message.style.color="black";
            id_message.textContent=`${amount}€ ont était retiré du compte de ${account.owner_name}, son nouveau solde est : ${account.balance}`
            
        }
})
// Transfert
bt_transfert.addEventListener("click", ()=>{
    const amount=Number(id_transfert.value);
    if(amount<=0){
            throw new Error("Le montant que vous avez selectionné est invalide, veuillez saisir un montant strictement positif");
        }else if(id_transfert.value.trim()=="" ||id_source.value.trim()=="" ||id_target.value.trim()=="" ){
            id_message.style.color="red";
            id_message.textContent="Champs vide"
            throw new Error("Champs vide");
        }else if (isNaN(amount)){
            id_message.style.color="red";
            id_message.textContent="Montant vide"
            throw new Error("Montant invalide");
        }else{
            const source_account= account_list.find(acc=>acc.owner_name===id_source.value);
            const target_account = account_list.find(acc=>acc.owner_name===id_target.value);
            if(!source_account){
                id_message.style.color="red";
                id_message.textContent="Le compte source n'existe pas"
                throw new Error ("Le compte source n'existe pas");
            }else if(!target_account){
                id_message.style.color="red";
                id_message.textContent="Le compte cible n'existe pas"
                throw new Error ("Le compte cible n'existe pas");
            }else if(source_account.balance<amount){
                console.log("zugzug")
                id_message.style.color="red";
                id_message.textContent="Le solde du compte n'est pas suffisant pour effectuer cette opération"
                throw new Error ("Le solde du compte n'est pas suffisant pour effectuer cette opération");
            }else{
                source_account.transfert(amount,target_account);
            }
            id_message.style.color="black";
            id_message.textContent=`${source_account.owner_name} à envoyer ${amount} à ${target_account.owner_name}, ${source_account.owner_name} a ${source_account.balance}, ${target_account.owner_name} a ${target_account.balance}`
        
        }
})
