import "./style.css";
import {Employee,Pme} from './annexe.js'

const pme = new Pme ("Les codeurs rangers",
    [new Employee("Guillaume","Annsothor",58,1800,12,90),
    new Employee("Remi","MrMilkShake",30,1800,12,90),
    new Employee("Jimmy","SonOfMoustache",30,1900,12,90),
    new Employee("Benoit","Henaryon",32,1200,12,90),
    new Employee("William","SajaPrime",18,10000,12,90)],
    400000,
    25000,
    12000);

pme.display_bilan();
console.log(pme);
pme.remaniement();