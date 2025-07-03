const container = document.querySelector(".artsContainer")

fetch('./public/data/json/arts.json')
  .then(res => res.json())
  .then(images => {
    images.forEach(image => {
      const imgCard = document.createElement("div");
      imgCard.className = "artCard";
      const img = document.createElement('img');
      img.src = image.src;


      const cardDesc = document.createElement("div")
      cardDesc.className = "cardDescription"
      if(image.description) {
        cardDesc.textContent = image.description
      }

      imgCard.appendChild(img);
      imgCard.appendChild(cardDesc);
      container.appendChild(imgCard)
    });
  });