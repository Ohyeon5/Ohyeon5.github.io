// fetch('data.json')
// 	.then(response => response.json())
// 	.then(data => {
// 		const cardsContainer = document.getElementById('cards-container');

// 		data.forEach(item => {
// 			const card = document.createElement('div');
// 			card.classList.add('card');
// 			card.innerHTML = `
// 				<img src="${item.image}" alt="${item.title}">
// 				<h3>${item.title}</h3>
// 				<p>${item.description}</p>
// 			`;

// 			cardsContainer.appendChild(card);
// 		});
// 	})
// 	.catch(error => console.error(error));

fetch('camping_matt.csv')
  .then(response => response.arrayBuffer())
  .then(data => {
    const workbook = CSV.read(data, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const items = CSV.utils.sheet_to_json(worksheet);

    const cardsContainer = document.getElementById('cards-container');
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.img_link}" alt="${item.model_name}">
        <h3>${item.model_name}</h3>
        <p>${item.price}</p>
        <p>${item.r_value}</p>
        <p>${item.weight}</p>
        <p>${item.pack_dimension}</p>
        <p>${item.brand}</p>
        <a href=${item.url}$>link to purchase</a>
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));