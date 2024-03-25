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

let deliveryOption = "deliver";

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

function updateCard(foodList, incredientList, headlineIndex) {
  const card = document.getElementById("menu");
  const headline = headlineList[headlineIndex];
  card.innerHTML = `<h2>${headline}</h2>`;
  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[i];
    const incredient = incredientList[i];
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
    </div>`;
  }
}

function cardFullcorn() {
  updateCard(foodListFullcorn, incredientListFullcorn, 0);
}

function cardWheat() {
  updateCard(foodListWheat, incredientListWheat, 1);
}

function cardDinkel() {
  updateCard(foodListDinkel, incredientListDinkel, 2);
}

function addToBasket(food, price) {
  shoppingBagNone();
  const index = basketFood.indexOf(food);

  if (index !== -1) { // prüft ob schon vorhanden
    basketAmount[index]++; // wenn ja, dann erhöhe um 1
  } else {
    basketFood.push(food); // wenn nein, dann füge alles hinzu
    basketPrices.push(price);
    basketAmount.push(1);
  }

  updateBasket();
}

function removeToBasket(food, price) {
  const index = basketFood.indexOf(food);

  if (index !== -1) { // prüft ob schon vorhanden
    basketAmount[index]--;  // wenn ja, dann verringere um 1
  }

  if (basketAmount[index] < 1) { // wenn kleiner 1, dann lösche alles
    basketFood.splice(index, 1);
    basketPrices.splice(index, 1);
    basketAmount.splice(index, 1);
  }

  updateBasket();
}

function updateBasket() {
  updateBasketDisplay(); 
  if (deliveryOption === "pickup") { // prüft ob Abholen oder Liefern
    practialSum("pickup");
  } else {
    practialSum("deliver");
  }
}

function shoppingBagNone() {
  const emptyBag = document.getElementById("shopping-bag-none-food");
  const fillBag = document.getElementById("shopping-bag-with-food");
  emptyBag.classList.add("display-none");
  fillBag.classList.remove("display-none");
}

function updateBasketDisplay() {
  const basketList = document.getElementById("shopping-bag-with-food");
  basketList.innerHTML = "";

  for (let i = 0; i < basketFood.length; i++) {
    const food = basketFood[i];
    const price = basketPrices[i];
    const amount = basketAmount[i];
    basketList.innerHTML += generateBasketItemHTML(food, price, amount);
  }
  basketList.innerHTML += generateBasketSumHTML();
}

function generateBasketItemHTML(food, price, amount) {
  return `
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

function generateBasketSumHTML() {
  return `
    <div class="sum">
      <div class="row">
        <div class="space-between">
          <span>Zwischensumme</span>
          <span id="sum"></span>
        </div>
        <div class="space-between">
          <span>Lieferkosten</span>
          <span id="deliverycost">4,99 €</span>
        </div>
        <div class="space-between">
          <span><b>Gesamt</b></span>
          <span id="total" ><b>Preis</b></span>
        </div>
      </div>
      <button onclick="thanksSite()" class="buy-button">Bezahlen</button>
    </div>
  `;
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
  if (document.getElementById("button2").classList.contains("markbuttons")) {
    totalSum("pickup");
  } else {
    totalSum("deliver");
  }
}

function totalSum(x) {
  const sum = basketSum.reduce((total, price) => total + price, 0); // berechnet Summe aus Array basketSum
  if (x === "deliver") {
    const totalSum = sum + 4.99;
    const totalSumElement = document.getElementById("total");
    totalSumElement.textContent = totalSum.toFixed(2) + " €";
  }

  if (x === "pickup") {
    const totalSum = sum;
    const totalSumElement = document.getElementById("total");
    totalSumElement.textContent = totalSum.toFixed(2) + " €";
    document.getElementById("deliverycost").innerHTML = `---`;
  }
}

function colorButton(x) {
  const buttonDeliver = document.getElementById("button1");
  const buttonPickup = document.getElementById("button2");
  if (x === "deliver") {
    buttonDeliver.classList.add("markbuttons");
    buttonPickup.classList.remove("markbuttons");
    document.getElementById("deliverycost").innerHTML = `4.99 €`;
    deliveryOption = "deliver";
  }

  if (x === "pickup") {
    buttonDeliver.classList.remove("markbuttons");
    buttonPickup.classList.add("markbuttons");
    document.getElementById("deliverycost").innerHTML = `---`;
    deliveryOption = "pickup";
  }

  totalSum(deliveryOption);
}

function thanksSite() {
  window.open("thanks.html", "_blank");
}

function toggleElementDisplay(element, displayValue) {
  element.style.removeProperty("display"); // löscht einzelne Eigenschaft aus Klasse
  element.style.setProperty("display", displayValue); // setzt einzelne Eigenschaft in Klasse
}

function responsiveMenuShow() {
  const bag = document.getElementById("shoppingBag");
  const toggle = document.getElementById("shoppingBagToggle");
  const header = document.getElementById("header");
  const container = document.getElementById("container");

  toggle.classList.add("display-none");
  toggleElementDisplay(bag, "flex");
  bag.classList.add("shoppingBagResponsive");
  header.classList.add("display-none");
  container.classList.add("display-none");
}

function responsiveMenuBagClose() {
  const bag = document.getElementById("shoppingBag");
  const toggle = document.getElementById("shoppingBagToggle");
  const header = document.getElementById("header");
  const container = document.getElementById("container");

  if (window.matchMedia("(max-width: 700px)").matches) { //überprüft ob Fenster unter 700px ist
    toggleElementDisplay(bag, "none");
  }

  bag.classList.remove("shoppingBagResponsive");
  toggle.classList.remove("display-none");
  header.classList.remove("display-none");
  container.classList.remove("display-none");
  document.querySelector(".responsiveMenu").classList.remove("display-none");
}

function showBag() {
  const bag = document.getElementById("shoppingBag");
  bag.style.removeProperty("display");
}

function handleWindowResize() {
  const bag = document.getElementById("shoppingBag");
  if (window.innerWidth > 700) { // prüft ob fenster größer 700px 
    showBag();
  } else if (bag.style.display !== "none") { // wenn nein, dann wird geprüft ob display=none ist
    responsiveMenuBagClose();
  }
}

window.addEventListener("resize", handleWindowResize); //reagiert auf Fensterbewegung
