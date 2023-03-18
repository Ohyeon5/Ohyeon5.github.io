fetch('src/camping_matt.xlsx')
  .then(response => response.arrayBuffer())
  .then(data => {
    const workbook = XLSX.read(data, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const items = XLSX.utils.sheet_to_json(worksheet);

    const cardsContainer = document.getElementById('cards-container');
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.img_link}" class="card-img-top" alt="${item.model_name}">
        <div class="card-body">
        <h5 class = "card-title">${item.model_name}</h3>
        <p class="card-text">${item.price}</p>
        <p class="card-text">${item.r_value}</p>
        <p class="card-text">${item.weight}</p>
        <p class="card-text">${item.pack_dimension}</p>
        <p class="card-text">${item.brand}</p>
        <p class="card-text">${item.type}</p>
        <a href=${item.url}$>link to purchase</a>
        </div>
      `
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));