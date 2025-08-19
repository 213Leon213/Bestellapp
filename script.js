
let dishes = [
    {
        name: "Pizza Salami",
        price: 10.99,
        description: "mit Käse und Rindersalami",
        amount: 1
    },
    {
        name: "Pizza Tonno",
        price: 7.99,
        description: "mit Thunfisch und Mais",
        amount: 1
    },
    {
        name: "Pizza Funghi",
        price: 10.49,
        description: "mit frischen Champignons, Basilikum-Pesto und extra Mozzarella",
        amount: 1
    },
    {
        name: "Pizza Margherita",
        price: 7.99,
        description: "mit extra Mozzarella",
        amount: 1
    },
    {
        name: "Pizza Caprese",
        price: 11.49,
        description: "mit frischen Tomaten, Mozarella-Kugeln und Basilikum-Pesto",
        amount: 1
    }
];

let sideDishes = [
    {
        name: "Pommes",
        price: 4.99,
        description: "Pommes selbstgemacht aus regionalen Kartoffeln",
        amount: 1
    },
    {
        name: "Kartoffel Salat",
        price: 5.50,
        description: "mit Mayonnaise, Karotten, Zwiebeln und Schnittlauch",
        amount: 1
    },
    {
        name: "Bruschetta",
        price: 6.49,
        description: "mit Tomate und Basilikum",
        amount: 1
    },
    {
        name: "Focaccia",
        price: 3.99,
        description: "Italienisches Fladenbrot",
        amount: 1
    },
    {
        name: "Pizza-Brötchen",
        price: 5.99,
        description: "8 leckere Pizzabrötchen mit Hirtenkäse und Mozarella",
        amount: 1
    }
];

let dessert = [
    {
        name: "Ben und Jerry's Cookie Dough",
        price: 8.50,
        description: "Ben und Jerry's mit Cookie Dough Geschmack",
        amount: 1
    },
    {
        name: "Ben und Jerry's Chocolate Fudge Brownie",
        price: 8.50,
        description: "Ben und Jerry's mit Chocolate Fudge Brownie Geschmack",
        amount: 1
    },
    {
        name: "Ben & Jerry's Strawberry Cheesecake",
        price: 8.50,
        description: "Ben & Jerry's mit Strawberry Cheesecake Geschmack",
        amount: 1
    },
    {
        name: "Ben & Jerry's Vegan Chunky Monkey",
        price: 8.50,
        description: "Ben & Jerry's Vegan mit Chunky Monkey Geschmack",
        amount: 1
    },
    {
        name: "Ben & Jerry's Peanut Butter Cup",
        price: 8.50,
        description: "Ben & Jerry's mit Peanut Butter Cup Geschmack",
        amount: 1
    }
];

let basket = [];

function init() {
    checkScreenSize()
    mainDishRender()
    
}

function mainDishRender() {
let mainDishContent = document.getElementById('main-dish-content');
let mainDishHead = document.getElementById('main-dish-head');
mainDishContent.innerHTML = "";
mainDishHead.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) { 
        mainDishContent.innerHTML += mainDishRenderTemplate(index);   
    }
    mainDishHead.innerHTML += mainDishHeadTemplate();
}

function sideDishRender() {
let sideDishContent = document.getElementById('main-dish-content');
let sideDishHead = document.getElementById('main-dish-head');
sideDishContent.innerHTML = "";
sideDishHead.innerHTML = "";
for (let index = 0; index < sideDishes.length; index++) { 
        sideDishContent.innerHTML += sideDishRenderTemplate(index);        
    }
sideDishHead.innerHTML += sideDishHeadTemplate();
}

function dessertRender() {
let dessertContent = document.getElementById('main-dish-content');
let dessertHead = document.getElementById('main-dish-head');
dessertContent.innerHTML = "";
dessertHead.innerHTML = "";
for (let index = 0; index < dessert.length; index++) { 
        dessertContent.innerHTML += dessertRenderTemplate(index);        
    }
dessertHead.innerHTML += dessertHeadTemplate();
}

function renderBasket() {
    let basketContent = document.getElementById('basket_content');
    basketContent.innerHTML = "";
    for (let index = 0; index < basket.length; index++) {
        basketContent.innerHTML += renderBasketTemplate(index);
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
    sum.innerHTML = renderBasketValueTemplate(prices, total);
   if (basket.length === 0) {
        sum.innerHTML = "";
   }                 
}

function addDishToBasket(index) {
    let dishName = dishes[index].name;
    let existingDish = basket.find(d => d.name === dishName);

    if (existingDish) {
        existingDish.amount += 1;
    } else {
        basket.push({
            name: dishName,
            price: dishes[index].price,
            amount: 1
        });
    } 
    renderBasket();
}

function addSideDishToBasket(index) {
    let dishName = sideDishes[index].name;
    let existingDish = basket.find(d => d.name === dishName);

    if (existingDish) {
        existingDish.amount += 1;
    } else {
        basket.push({
            name: dishName,
            price: sideDishes[index].price,
            amount: 1
        });
    }
    renderBasket();
}

function addDessertToBasket(index) {
    let dishName = dessert[index].name;
    let existingDish = basket.find(d => d.name === dishName);

    if (existingDish) {
        existingDish.amount += 1;
    } else {
        basket.push({
            name: dishName,
            price: dessert[index].price,
            amount: 1
        });
    }
    renderBasket();
}

function increaseAmount(index) {
    basket[index].amount +=1;
    renderBasket();

}

function decreaseAmount(index) {
    basket[index].amount -= 1;
    if (basket[index].amount == 0) {
        basket.splice(index, 1);
    }
    renderBasket();
}

function basketToggle() {
   let basket = document.getElementById('side_element');
   let content = document.getElementById('content');
    basket.classList.toggle("side_element_close");
    content.classList.toggle("content_only");

    if (basket.classList.contains("side_element_close")) {
        basketContains();
    }
    if (window.matchMedia("(max-width: 820px)").matches) {
        basketWindowMatches();
    }
}

function deleteDish(index) {
    basket.splice(index, 1);
    renderBasket();
}

function checkScreenSize() {
    if (window.matchMedia("(max-width: 820px)").matches) {
        windowMatches();
    } else {
        windowDoesntMatch()
    }
}

function orderPopup() {
    let popup = document.getElementById('popup');
    
    if (!basket == 0) {
        popup.classList.toggle('popup-open');
        popup.addEventListener("click", () => {
            basket.length = 0;
            renderBasket();
            if (window.matchMedia("(max-width: 820px)").matches) {
                basketToggle();
            }   
        })
    }
}

window.addEventListener('load', checkScreenSize);

window.addEventListener('resize', checkScreenSize);

function windowMatches() {
let basket = document.getElementById('side_element');
    let content = document.getElementById('content');
    let headerIcon = document.getElementById('basket_icon');
    let mobileButton = document.getElementById('mobile-cart-button');

    headerIcon.style.display = 'none';
    mobileButton.style.display = 'block';
    basket.classList.add('side_element_close');
    content.classList.add('content_only');
}

function windowDoesntMatch() {
    let basket = document.getElementById('side_element');
    let headerIcon = document.getElementById('basket_icon');
    let mobileButton = document.getElementById('mobile-cart-button');
    headerIcon.style.display = 'block';
    mobileButton.style.display = 'none';
    basket.classList.remove('side_element_close');
    basket.classList.remove('content_only');
}

function basketContains() {
   let content = document.getElementById('content');
   if (!content.classList.contains("content_only")) {
            content.classList.add("content_only")
        }
}

function basketWindowMatches() {
    let basket = document.getElementById('side_element');
   let mobileButton = document.getElementById('mobile-cart-button');
   if (basket.classList.contains("side_element_close")) {
            mobileButton.style.display = 'block';
        } else {
            mobileButton.style.display = 'none';
        }
}