function mainDishRender() {
let mainDishContent = document.getElementById('main-dish-content');
let mainDishHead = document.getElementById('main-dish-head');
mainDishContent.innerHTML = "";
mainDishHead.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) { 
        mainDishContent.innerHTML += `<div class="dish-block">
                                    <div>
                                        <p id="${dishes[index].name.toLowerCase()}" class="dishHeadline">${dishes[index].name}</p>
                                        <button class="add-button" onclick="addDishToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${dishes[index].description}</p>
                                        <p id="${dishes[index].price.toLowerCase}" class="dishprice">${dishes[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`   
    }
    mainDishHead.innerHTML += `<img  class="main-dish-banner" src="./assets/images/pizza-3010062_1920.jpg" alt="maindishpicture">
                                <p class="main-dish-headline">Hauptgerichte</p>`
}

function sideDishRender() {
let sideDishContent = document.getElementById('main-dish-content');
let sideDishHead = document.getElementById('main-dish-head');
sideDishContent.innerHTML = "";
sideDishHead.innerHTML = "";
for (let index = 0; index < sideDishes.length; index++) { 
        sideDishContent.innerHTML += `<div class="dish-block">
                                    <div>
                                        <p id="${sideDishes[index].name.toLowerCase()}" class="dishHeadline">${sideDishes[index].name}</p>
                                        <button class="add-button" onclick="addSideDishToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${sideDishes[index].description}</p>
                                        <p id="${sideDishes[index].price.toLowerCase}" class="dishprice">${sideDishes[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`        
    }
sideDishHead.innerHTML += `<img  class="main-dish-banner" src="./assets/images/bruschetta-5699490_1920.jpg" alt="sidedishpicture">
                                <p class="main-dish-headline">Beilagen</p>`
}

function dessertRender() {
let dessertContent = document.getElementById('main-dish-content');
let dessertHead = document.getElementById('main-dish-head');
dessertContent.innerHTML = "";
dessertHead.innerHTML = "";
for (let index = 0; index < dessert.length; index++) { 
        dessertContent.innerHTML += `<div class="dish-block">
                                    <div>
                                        <p id="${dessert[index].name.toLowerCase()}" class="dishHeadline">${dessert[index].name}</p>
                                        <button class="add-button" onclick="addDessertToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${dessert[index].description}</p>
                                        <p id="${dessert[index].price.toLowerCase}" class="dishprice">${dessert[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`        
    }
dessertHead.innerHTML += `<img  class="main-dish-banner" src="./assets/images/ice-cream-3611698_1920.jpg" alt="dessertpicture">
                                <p class="main-dish-headline">Dessert</p>`
}

function renderBasket() {
    let basketContent = document.getElementById('basket_content');
    basketContent.innerHTML = "";
    for (let index = 0; index < basket.length; index++) {
        basketContent.innerHTML += `<p class="dishname">${basket[index].name}</p>
                                <p><button class="minus-button" onclick="decreaseAmount(${index})">-</button> ${basket[index].amount + 'x'}<button class="plus-button" onclick="increaseAmount(${index})">+</button></p>
                                <p>${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",") + "€"}<button class="delete-Button" onclick="deleteDish(${index})">🗑️</button></p>`;
    }
    renderBasketValue();
}

function renderBasketValue() {
    let sum = document.getElementById('basket_value');
    sum.innerHTML = "";
    let prices = 0;
    for (let index = 0; index < basket.length; index++) {
        prices += basket[index].price * basket[index].amount;
    }
    let total = prices + 5;
    sum.innerHTML = `<div class="sum-inbetween"><p>Zwischensumme</p>
                    <p>${prices.toFixed(2).replace(".", ",")}€</p></div>
                    <div class="delivery-costs"><p>Lieferkosten</p> <p>5,00€</p></div>
                    <div class="sum-basket">
                    <p>Gesamt</p>
                    <p>${total.toFixed(2).replace(".", ",")}€</p>
                    </div>
                    <button onclick="orderPopup()" id="order-button" class="order-button">Bestellen</button>`;
   if (basket.length === 0) {
        sum.innerHTML = "";
   }                 
}

