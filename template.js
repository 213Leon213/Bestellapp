function renderBasketValueTemplate(prices, total) {
    return `<div class="sum-inbetween"><p>Zwischensumme</p>
                    <p>${prices.toFixed(2).replace(".", ",")}€</p></div>
                    <div class="delivery-costs"><p>Lieferkosten</p> <p>5,00€</p></div>
                    <div class="sum-basket">
                    <p>Gesamt</p>
                    <p>${total.toFixed(2).replace(".", ",")}€</p>
                    </div>
                    <button onclick="orderPopup()" id="order-button" class="order-button">Bestellen</button>`;
}

function mainDishRenderTemplate(index) {
    return `<div class="dish-block">
                                    <div>
                                        <p id="${dishes[index].name.toLowerCase()}" class="dishHeadline">${dishes[index].name}</p>
                                        <button class="add-button" onclick="addDishToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${dishes[index].description}</p>
                                        <p class="dishprice">${dishes[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`;
}

function mainDishHeadTemplate() {
    return `<img  class="main-dish-banner" src="./assets/images/pizza-3010062_1920.jpg" alt="maindishpicture">
                                <p class="main-dish-headline">Hauptgerichte</p>`;
}

function sideDishRenderTemplate(index) {
    return `<div class="dish-block">
                                    <div>
                                        <p id="${sideDishes[index].name.toLowerCase()}" class="dishHeadline">${sideDishes[index].name}</p>
                                        <button class="add-button" onclick="addSideDishToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${sideDishes[index].description}</p>
                                        <p class="dishprice">${sideDishes[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`;
}

function sideDishHeadTemplate() {
    return `<img  class="main-dish-banner" src="./assets/images/bruschetta-5699490_1920.jpg" alt="sidedishpicture">
                                <p class="main-dish-headline">Beilagen</p>`;
}

function dessertRenderTemplate(index) {
    return `<div class="dish-block">
                                    <div>
                                        <p id="${dessert[index].name.toLowerCase()}" class="dishHeadline">${dessert[index].name}</p>
                                        <button class="add-button" onclick="addDessertToBasket(${index})">+</button>
                                    </div>
                                        <p class="dishdescription">${dessert[index].description}</p>
                                        <p class="dishprice">${dessert[index].price.toFixed(2).replace(".", ",") + "€"}</p></div>`;  
}

function dessertHeadTemplate() {
    return `<img  class="main-dish-banner" src="./assets/images/ice-cream-3611698_1920.jpg" alt="dessertpicture">
                                <p class="main-dish-headline">Dessert</p>`;
}

function renderBasketTemplate(index) {
    return `<p class="dishname">${basket[index].name}</p>
                                <p><button class="minus-button" onclick="decreaseAmount(${index})">-</button> ${basket[index].amount + 'x'}<button class="plus-button" onclick="increaseAmount(${index})">+</button></p>
                                <p>${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",") + "€"}<button class="delete-Button" onclick="deleteDish(${index})">🗑️</button></p>`;
}