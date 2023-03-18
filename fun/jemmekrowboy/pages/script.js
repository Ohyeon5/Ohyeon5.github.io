fetch('../src/camping_matt.xlsx')
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
        <img src="${item.img_link}" class="card-img-top img-fluid" alt="${item.model_name}">
        <div class="card-body">
        <h5 class = "card-title">${item.model_name}</h3>
        <p class="card-text">Price: ${item.price} CHF</p>
        <p class="card-text">R-value: ${item.r_value}</p>
        <p class="card-text">Weight: ${item.weight} g</p>
        <p class="card-text">Pack dimension: ${item.pack_dimension}</p>
        <p class="card-text">Brand: ${item.brand}</p>
        <p class="card-text">Type: ${item.type}</p>
        <a href=${item.url}$> link to purchase </a>
        </div>
      `
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));