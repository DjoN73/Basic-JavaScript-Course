"use strict";

let basketPrice = 0;
let basket = [
    { product: 'Ручка', price: 35.5 },
    { product: 'Тетрадь', price: 56 }
];

function countBasketPrice(x) {
    for (let prod of x) {
        basketPrice += prod.price;
    }
    return basketPrice;
}

alert('Стоимость корзины: ' + countBasketPrice(basket) + ' рублей');