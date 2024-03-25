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

function cardFullcorn() {
  const card = document.getElementById("menu");
  const headline = headlineList[0];
  card.innerHTML = "";
  card.innerHTML = `
  <h2>${headline}</h2>`;
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
  if (deliveryOption === "pickup") {
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
  if (deliveryOption === "pickup") {
    practialSum("pickup");
  } else {
    practialSum("deliver");
  }
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
    <span id="deliverycost">4,99 €</span>
  </div>
  <div class="space-between">
    <span><b>Gesamt</b></span>
    <span id="total" ><b>Preis</b></span>
  </div>
  </div>
  <button onclick="thanksSite()" class="buy-button">Bezahlen</button>
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
  if (document.getElementById("button2").classList.contains("markbuttons")) {
    totalSum("pickup");
  } else {
    totalSum("deliver");
  }
}

function totalSum(x) {
  const sum = basketSum.reduce((total, price) => total + price, 0);
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

function responsiveMenuShow() {
  bag = document.getElementById("shoppingBag");
  toggle = document.getElementById("shoppingBagToggle");
  header = document.getElementById("header");
  container = document.getElementById("container");

  // Ausblenden des Toggle-Elements, wenn das Menü geöffnet wird
  toggle.classList.add("display-none");

  bag.style.removeProperty("display");
  bag.style.setProperty("display", "flex");
  bag.classList.add("shoppingBagResponsive");
  header.classList.add("display-none");
  container.classList.add("display-none");
}

function responsiveMenuBagClose() {
  bag = document.getElementById("shoppingBag");
  toggle = document.getElementById("shoppingBagToggle");
  header = document.getElementById("header");
  container = document.getElementById("container");

  // Prüfe, ob das Fenster eine Breite von maximal 700px hat
  if (window.matchMedia("(max-width: 700px)").matches) {
    bag.style.removeProperty("display");
    bag.style.setProperty("display", "none");
  }

  bag.classList.remove("shoppingBagResponsive");
  toggle.classList.remove("display-none");
  header.classList.remove("display-none");
  container.classList.remove("display-none");

  // Manuell entferne die Klasse 'display-none' vom Container
  document.querySelector(".responsiveMenu").classList.remove("display-none");
}

// Funktion, die die Eigenschaft 'display: none;' entfernt
function showBag() {
  bag = document.getElementById("shoppingBag");
  bag.style.removeProperty("display");
}

// Event-Listener für Änderungen der Fenstergröße
window.addEventListener("resize", function () {
  // Prüfe, ob die Fensterbreite größer als 700px ist
  if (window.innerWidth > 700) {
    // Wenn ja, rufe die Funktion showBag() auf, um die Eigenschaft zu entfernen
    showBag();
  } else {
    // Wenn das Fenster kleiner oder gleich 700px ist und die Div sichtbar ist, rufe responsiveMenuBagClose() auf
    const bag = document.getElementById("shoppingBag");
    if (bag.style.display !== "none") {
      responsiveMenuBagClose();
    }
  }
});
