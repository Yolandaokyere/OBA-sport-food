import { fetchData } from "./fetchData.js";
import { routieData } from "./routieData.js";
const buttons = document.querySelectorAll('nav ul li')

// Hashtags linkjes
window.addEventListener('hashchange', ()=> {
    let hash = window.location.hash; // je krijgt de linkjes met #
    const hashtagRemoved = hash.replaceAll('#','');
    console.log("window.location.hash : " + hashtagRemoved);
    return hashtagRemoved // met return kan ik de functie in het hele bestand gebruiken
})

// routieData();
// let query;
// routie(
//     {
//     ':query': queryValue => {
//         //this gets called when hash == #users
//         query = queryValue;
//         }
//     }
// );

// 1. The variables [the endpoint] = Data
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
let query = 'vegan'
const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;


const config = {
  Authorization: `Bearer ${secret}`
};


fetchData(url, config) // Fetch data 




