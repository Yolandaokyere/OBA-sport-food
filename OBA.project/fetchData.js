import { render } from "./renderData.js";
// import { render } from "./queryVegan.js";
// import { render } from "./renderVegan.js";
// import { render } from "./renderProtein.js";
// import { render } from "./renderFasting.js";

export function fetchData(url, config) {
fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.log(err);
  })
}
