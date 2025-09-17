const calculer_bouton = document.getElementById("id_calculer");
const product_name = document.getElementById("nom_produit");
const product_quantity = document.getElementById("id_quantite");
const product_price = document.getElementById("id_prix_ht");
const result_div = document.getElementById("resultat");
let result=0;

console.log(product_price);
calculer_bouton.addEventListener("click" ,()=>{
    if(product_name.value.trim()!="" && product_quantity.value.trim()!="" && product_price.value.trim()!=""){
        let product_quantity_int=Number(product_quantity.value);
        let product_price_float=Number(product_price.value);

        if(Number.isInteger(product_quantity_int) && !isNaN(product_price_float) && isNaN(product_name.value)){
            console.log(result=product_quantity_int*product_price_float);
            const result_txt=`Le prix de ${product_quantity_int} ${product_name.value} est de ${result}€`;
            result_div.innerText= result_txt;
        }
        else{
            if(Number.isInteger(product_quantity_int)==false){
                alert("Veuillez saisir une quantité valide, un entier");
            }
            if(isNaN(product_price_float)){
                alert("Veuillez saisir un prix valide (int ou float))");
            }
            if(!isNaN(product_name.value)){
                alert("Veuillez saisir un nom de produit valide (en lettre seulement)");
            }
        }
    }
    else{
        alert("Les champs sont vides");
    }
})