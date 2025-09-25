import {apiKey} from "./env.js"

const bloc_meteo = document.getElementById("bloc_meteo");
const input_text_city= document.getElementById("city");
const bt_charger = document.getElementById("charger");

const box = document.createElement("div");
box.setAttribute("id","box");
box.style.display="flex";
box.style.flexDirection="column";
bloc_meteo.appendChild(box);

for(let i=1;i<4;i++){
    const title = document.createElement("h2");
    title.style.width="auto";
    title.setAttribute("style","width : auto; height : 10vh; background-Color : grey; text-Align : center;\
align-Content : center; padding-Top : 20px; padding-Bottom : 20px");
    title.textContent="";
    title.setAttribute("id",`id_title${i}`);
    box.appendChild(title);
}