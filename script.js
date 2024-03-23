let priceList = [7.95, 6.95, 9.95];
let imgList = [
  "img/sandwich-schinken.jpg",
  "img/sandwich-zucchini.jpg",
  "img/sandwich-guacamole.jpg",
];

let headlineList = ["Vollkorn-Bun", "Weizen-Bun", "Dinkel-Bun"];

let basketFood = [];
let basketPrices = [];
let basketAmount = [];
let basketSum = [];

//////////////////////////////Vollkorn-Arrays/////////////////////////////////////
let incredientListFullcorn = [
  "Vollkorn-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Vollkorn-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Vollkorn-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
let foodListFullcorn = [
  "Vollkorn Schinken-Sandwich",
  "Vollkorn Vegetarisches-Sandwich",
  "Vollkorn Spezial-Sandwich",
];
//////////////////////////////Vollkorn-Arrays/////////////////////////////////////
//////////////////////////////Weizen-Arrays///////////////////////////////////////
let incredientListWheat = [
  "Weizen-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Weizen-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Weizen-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
let foodListWheat = [
  "Weizen Schinken-Sandwich",
  "Weizen Vegetarisches-Sandwich",
  "Weizen Spezial-Sandwich",
];
//////////////////////////////Weizen-Arrays///////////////////////////////////////
//////////////////////////////Dinkel-Arrays///////////////////////////////////////
let incredientListDinkel = [
  "Dinkel-Bun, Salat, Gurke, Tomate, Schinken, Zwiebel, Sauce",
  "Dinkel-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Dinkel-Bun, Salat, Gurke, Tomate, Zwiebel, Sauce",
  "Guacamole",
];
let foodListDinkel = [
  "Dinkel Schinken-Sandwich",
  "Dinkel Vegetarisches-Sandwich",
  "Dinkel Spezial-Sandwich",
];
//////////////////////////////Dinkel-Arrays///////////////////////////////////////

function cardFullcorn() {
  const card = document.getElementById("menu");
  const headline = headlineList[0];
  card.innerHTML = "";
  card.innerHTML = `<h2>${headline}</h2>`;
  for (let i = 0; i < foodListFullcorn.length; i++) {
    const food = foodListFullcorn[i];
    const incredient = incredientListFullcorn[i];
    const price = priceList[i];
    const img = imgList[i];
    card.innerHTML += `
    <div class="menu">
      <div class="menu-card">
        <div class="card-header">
          <h3>${food}</h3>
          <img onclick="addToBasket('${food}', ${price})" src="img/plus-circle.svg" alt="" />
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
  for (let i = 0; i < foodListWheat.length; i++) {
    const food = foodListWheat[i];
    const incredient = incredientListWheat[i];
    const price = priceList[i];
    const img = imgList[i];
    card.innerHTML += `
    <div class="menu">
    <div class="menu-card">
      <div class="card-header">
        <h3>${food}</h3>
        <img onclick="addToBasket('${food}', ${price})" src="img/plus-circle.svg" alt="" />
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
  for (let i = 0; i < foodListDinkel.length; i++) {
    const food = foodListDinkel[i];
    const incredient = incredientListDinkel[i];
    const price = priceList[i];
    const img = imgList[i];
    card.innerHTML += `
    <div class="menu">
    <div class="menu-card">
      <div class="card-header">
        <h3>${food}</h3>
        <img onclick="addToBasket('${food}', ${price})" src="img/plus-circle.svg" alt="" />
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

function addToBasket(food, price) {
  shoppingBagNone();
  const index = basketFood.indexOf(food); // Überprüft, ob das Essen bereits im Warenkorb ist

  if (index !== -1) {
    // Wenn das Essen bereits im Warenkorb ist, erhöhe die Menge
    basketAmount[index]++;
  } else {
    // Ansonsten füge das Essen zum Warenkorb hinzu
    basketFood.push(food);
    basketPrices.push(price);
    basketAmount.push(1);
  }

  // Aktualisiere die Anzeige des Warenkorbs
  updateBasketDisplay();
  practialSum();
}

function shoppingBagNone() {
  const emptyBag = document.getElementById("shopping-bag-none-food");
  const fillBag = document.getElementById("shopping-bag-with-food");
  emptyBag.classList.add("display-none");
  fillBag.classList.remove("display-none");
}

function removeToBasket(food, price) {
  const index = basketFood.indexOf(food); // Überprüft, ob das Essen bereits im Warenkorb ist

  if (index !== -1) {
    // Wenn das Essen bereits im Warenkorb ist, verringer die Menge
    basketAmount[index]--;
  }

  if (basketAmount[index] < 1) {
    basketFood.splice(index, 1);
    basketPrices.splice(index, 1);
    basketAmount.splice(index, 1);
  }

  // Aktualisiere die Anzeige des Warenkorbs
  updateBasketDisplay();
  practialSum();
}

function updateBasketDisplay() {
  const basketList = document.getElementById("shopping-bag-with-food");
  basketList.innerHTML = "";

  for (let i = 0; i < basketFood.length; i++) {
    const food = basketFood[i];
    const price = basketPrices[i];
    const amount = basketAmount[i];
    basketList.innerHTML += `
    <div class="kasten">
      <div class="space-between">
        <span class="text-decoration">${food}</span>
        <span>${price} €</span>
      </div>

      <div class="space-between">
        <a class="notiz" href="#">Anmerkung hinzufügen</a>
        <div class="icons-bag">
        <img onclick="removeToBasket('${food}','${price}')" src="img/dash-circle.svg" alt="" />
        <span class="margin">${amount}</span>
        <img onclick="addToBasket('${food}','${price}')" src="img/plus-circle.svg" alt="" />
        </div>
      </div>
    </div> 
    <div class="spacer"></div>
    `;
  }
  basketList.innerHTML += `<div class="sum">
  <div class="row">
<div class="space-between">
    <span>Zwischensumme</span>
    <span id="sum"></span>
  </div>
  <div class="space-between">
    <span>Lieferkosten</span>
    <span>4,99 €</span>
  </div>
  <div class="space-between">
    <span><b>Gesamt</b></span>
    <span id="total" ><b>Preis</b></span>
  </div>
  </div>
  <button class="buy-button">Bezahlen</button>
</div>`;
}

function practialSum() {
  basketSum = [];
  for (let i = 0; i < basketPrices.length; i++) {
    const price = basketPrices[i];
    const amount = basketAmount[i];
    const subtotal = price * amount;
    basketSum.push(subtotal);
  }
  const sum = basketSum.reduce((total, price) => total + price, 0);
  const sumElement = document.getElementById("sum");
  sumElement.textContent = sum.toFixed(2) + " €";
  totalSum();
}

function totalSum() {
  const sum = basketSum.reduce((total, price) => total + price, 0);
  const totalSum = sum + 4.99;
  const totalSumElement = document.getElementById("total");
  totalSumElement.textContent = totalSum.toFixed(2) + " €";
}
