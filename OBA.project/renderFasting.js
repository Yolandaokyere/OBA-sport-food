// export function renderFasting(data) {
// const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
// let query = 'fasting'
// const main = document.querySelector('main');
// const cors = 'https://cors-anywhere.herokuapp.com/';
// const key = '1e19898c87464e239192c8bfe422f280';
// const secret = '4289fec4e962a33118340c888699438d';
// const detail = 'Default';
// const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;


// const config = {
//   Authorization: `Bearer ${secret}`
// };


// // Render data Fasting
// // export function render(data) {
//     const results = data.results;
//     console.dir(results);
//     results.forEach((item, i) => {
//       const html = `
//               <li>
//                 <h3>${item.titles[0]}</h3>
//                 <h4>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</h4>
//                 <img src="${
//                   item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
//                 }">
//               </li>
//             `;
//         const ul = document.querySelector('.media-group3 ul');
//       ul.insertAdjacentHTML('beforeend', html);
//     });
//   }