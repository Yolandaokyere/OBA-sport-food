import { renderData } from "./renderData.js";
//Data
const cors = 'https://cors-anywhere.herokuapp.com/';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';

const config = {
  Authorization: `Bearer ${secret}`
};

export const fetchData = async ({query, destination }) => {
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

// Try means "He, probeer dit..."
try {
  const res = await fetch(url, config); // He wacht tot je een response krijgt van dit
  const json = await res.json() // Wacht dit omgezet is in JSON 

  renderData(json, destination) // Roep render functie

} catch(e) { 
  // He, als er iets fout gaat, doe dan dit.
  console.log(e)
}
}