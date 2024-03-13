let foodList = [
  "Schinken-Sandwich",
  "Vegetarisches-Sandwich",
  "Spezial-Sandwich",
];
let priceList = [7.95, 6.95, 9.95];
let imgList = [
  "img/sandwich-schinken.jpg",
  "img/sandwich-zucchini.jpg",
  "img/sandwich-guacamole.jpg",
];

let headlineList = ['Vollkorn-Bun', 'Weizen-Bun', 'Dinkel-Bun']

//////////////////////////////Vollkorn-Arrays/////////////////////////////////////
let incredientListFullcorn = [
  "Vollkorn-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Vollkorn-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Vollkorn-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
//////////////////////////////Vollkorn-Arrays/////////////////////////////////////
//////////////////////////////Weizen-Arrays///////////////////////////////////////
let incredientListWheat = [
  "Weizen-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Weizen-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Weizen-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
//////////////////////////////Weizen-Arrays///////////////////////////////////////
//////////////////////////////Dinkel-Arrays///////////////////////////////////////
let incredientListDinkel = [
  "Dinkel-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Dinkel-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Dinkel-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
//////////////////////////////Dinkel-Arrays///////////////////////////////////////

function cardFullcorn() {
  const card = document.getElementById("menu");
  const headline = headlineList[0];
  card.innerHTML = "";
  card.innerHTML = `<h2>${headline}</h2>`;
  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[i];
    const incredient = incredientListFullcorn[i];
    const price = priceList[i];
    const img = imgList[i];
    card.innerHTML += `
    <div class="menu">
      <div class="menu-card">
        <div class="card-header">
          <h3>${food}</h3>
          <img src="img/plus-circle.svg" alt="" />
        </div>
        <div class="card-main">
          <div class="card-text">
            <div class="text-description">
              <span>${incredient}</span>
              <span>Wahlweise als 15cm oder 30cm Sandwich</span>
            </div>
            <span><b>${price} €</b></span>
          </div>
          <img src="${img}" alt="" />
        </div>
      </div>
      </div>
    `;
  }
}

function cardWheat() {
    const card = document.getElementById("menu");
    const headline = headlineList[1];
    card.innerHTML = "";
    card.innerHTML = `<h2>${headline}</h2>`;
    for (let i = 0; i < foodList.length; i++) {
      const food = foodList[i];
      const incredient = incredientListWheat[i];
      const price = priceList[i];
      const img = imgList[i];
      card.innerHTML += `
      <div class="menu">
        <div class="menu-card">
          <div class="card-header">
            <h3>${food}</h3>
            <img src="img/plus-circle.svg" alt="" />
          </div>
          <div class="card-main">
            <div class="card-text">
              <div class="text-description">
                <span>${incredient}</span>
                <span>Wahlweise als 15cm oder 30cm Sandwich</span>
              </div>
              <span><b>${price} €</b></span>
            </div>
            <img src="${img}" alt="" />
          </div>
        </div>
        </div>
      `;
    }
  }

  function cardDinkel() {
    const card = document.getElementById("menu");
    const headline = headlineList[2];
    card.innerHTML = "";
    card.innerHTML = `<h2>${headline}</h2>`;
    for (let i = 0; i < foodList.length; i++) {
      const food = foodList[i];
      const incredient = incredientListDinkel[i];
      const price = priceList[i];
      const img = imgList[i];
      card.innerHTML += `
      <div class="menu">
        <div class="menu-card">
          <div class="card-header">
            <h3>${food}</h3>
            <img src="img/plus-circle.svg" alt="" />
          </div>
          <div class="card-main">
            <div class="card-text">
              <div class="text-description">
                <span>${incredient}</span>
                <span>Wahlweise als 15cm oder 30cm Sandwich</span>
              </div>
              <span><b>${price} €</b></span>
            </div>
            <img src="${img}" alt="" />
          </div>
        </div>
        </div>
      `;
    }
  }