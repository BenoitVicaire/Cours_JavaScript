import {apiKey} from "./env.js"
import DOMPurify from 'dompurify';

const bloc_meteo = document.getElementById("bloc_meteo");
const input_text_city= document.getElementById("city");
const bt_charger = document.getElementById("charger");


const box = document.createElement("div");
box.setAttribute("id","box");
box.style.display="flex";
box.style.flexDirection="column";
bloc_meteo.appendChild(box);

for(let i=1;i<5;i++){
    const title = document.createElement("h2");
    title.style.width="auto";
    title.setAttribute("style","width : auto; height : 10vh; background-Color : grey; text-Align : center;\
align-Content : center; padding-Top : 20px; padding-Bottom : 20px");
    title.textContent="";
    title.setAttribute("id",`id_title${i}`);
    box.appendChild(title);
};

const  getMeteoJson= async (ville)=> {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=` + apiKey)
    .then(response =>{
        return response.json();
        
    }).catch(error =>{
        throw new Error ("La ville n'existe pas");
    })   
};

// // test en console log
// getMeteoJson("paris").then(json => { // console.log deuxieme methode
//     console.log(json);
// });
// fin de test

bt_charger.addEventListener("click",()=>{
    const title1=document.getElementById("id_title1");
    const title2=document.getElementById("id_title2");
    const title3=document.getElementById("id_title3");
    const title4=document.getElementById("id_title4");

    const input_text_city_sanitized = DOMPurify.sanitize(input_text_city.value);
    if(input_text_city_sanitized==""){
        throw new Error("Champs ville vide");
    }else{
        
        getMeteoJson(input_text_city_sanitized)
        .then(data =>{
            if(data.cod==200){
                title1.textContent=`Ville : ${data.name}`
                title2.textContent=`Température : ${data.main.temp}`
                title3.textContent=`Temps : ${data.weather[0].description}`
                const image_weather = document.createElement("img");
                image_weather.setAttribute("style","width: 90px; height : 90px; align-Self : start;")
                image_weather.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
                title4.replaceChildren(image_weather);
            } else {
                title1.textContent = "Ville inconnue";
                title2.textContent = "";
                title3.textContent = "";
                
            }
        })
        .catch(err => {
            title1.textContent = "Erreur réseau";
            console.error(err);
        });    
    }
});
