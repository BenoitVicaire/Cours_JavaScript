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

const account_list =[];

// Créer un nouveau compte et l'ajouter a la account_list
bt_create.addEventListener("click", ()=>{
    if(account_name.value.trim()==""){
        throw new Error("Champs vide")
    }else{
            account_list.map(account=>{
                if (account.owner_name===account_name.value){
                    throw new Error("Le compte existe déja")
                }
            })
            account_list.push(new compteBancaire(account_name.value,0));
            console.log(account_list);
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
        }
})
