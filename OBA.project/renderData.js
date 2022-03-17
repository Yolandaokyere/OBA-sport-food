// Render data Protein
export function renderData(data, destination) {
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
      const html = `
              <li>
                <h3>${item.titles[0]}</h3>
                <h4>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</h4>
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
              </li>
            `;
        const ul = document.querySelector(destination);
      ul.insertAdjacentHTML('beforeend', html);
    });
  }
