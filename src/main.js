import "./style.css";
import {compteBancaire} from "./annexe.js";

const alex = new compteBancaire("Alex",1000);
const marco = new compteBancaire("Marco",1000);
const clovis = new compteBancaire("Clovis",1000);

console.log(alex);
try{
    alex.withdraw(10000);
    }catch(error){
        console.log(error.message);
}
    console.log(alex);
try{
    marco.transfer(300,clovis);
    }catch(error){
        console.log(error.message);
    }
try{
    alex.withdraw(1200);
    }catch(error){
        console.log(error.message);
    }

    console.log(alex);
    console.log(marco);
    console.log(clovis);
