'use strict';

class Menu {
    constructor() {
        this.menu = this.fetchMenu();
        this.size = this.menu.size;
        this.extras = this.menu.extras;
        this.topping = this.menu.topping;
        this.render();
    }

    /**
     * Метод делает xhr запрос списка ингредиентов.
     * @return {{Object}} ingredients объект со списком ингредиентов
     */
    fetchMenu() {
        /* Этот фрагмент не работает без сервера */
        // let request = new XMLHttpRequest();
        // request.open("GET", "menu.json", false);
        // request.send();
        // return JSON.parse(request.responseText);

        /* альтернативное решение */
        return {
            size: [
                {"id": "S", "price": 50, "calorie": 20, "text": "Small (50 RUB, 20 kCal)"},
                {"id": "L", "price": 100, "calorie": 40, "text": "Large (100 RUB, 40 kCal)"}
            ],
            extras: [
                {"id": "1", "price": 10, "calorie": 20, "text": "Cheese (+10 RUB, +20 kCal)"},
                {"id": "2", "price": 20, "calorie": 5, "text": "Lettuce (+20 RUB, +5 kCal)"},
                {"id": "3", "price": 15, "calorie": 10, "text": "Fries (+15 RUB, +10 kCal)"}
            ],
            topping: [
                {"id": "1", "price": 15, "calorie": 0, "text": "Condiments (+15 RUB, +0 kCal)"},
                {"id": "2", "price": 20, "calorie": 5, "text": "Mayo (+20 RUB, +5 kCal)"}
            ]
        }
    }
    /**
     * Метод выводит список ингредиентов на экран
     */
    render() {
        document.getElementById('size').insertAdjacentHTML("afterbegin", this._createHTML(this.size, "option"));
        document.getElementById('extras').insertAdjacentHTML("afterbegin", this._createHTML(this.extras, "option"));
        document.getElementById('topping').insertAdjacentHTML("afterbegin", this._createHTML(this.topping, "checkbox"));
    }
    
    _createHTML(section, tag = 'option') {
        switch (tag) {
            case "option":
                return section.map(item => `<option value="${item.id}">${item.text}</option>`).join('');
            case "checkbox":
                return section.map(item => `<input type="checkbox" name="topping" value="${item.id}" id="topping${item.id}">
                    <label for="topping${item.id}"> ${item.text}</label><br>`).join('');
        }
    }
}

class Burger {
    constructor(menu) {
        this.menu = menu;
        this.size = menu.size[0];
        this.extras = menu.extras[0];
        this.toppings = [];
        this.calculatePrice();
        this.calculateCalories();
    }

    changeIngredient(target) {
        let index = this.menu[target.name].findIndex(x => x.id === target.value);
        let ingredient = this.menu[target.name][index];

        switch (target.name) {
            case "size":
                this.size = ingredient;
                break;
            case "extras":
                this.extras = ingredient;
                break;
            case "topping":
                if (target.checked === true) {
                    this.addTopping(ingredient);
                } else {
                    this.removeTopping(ingredient);
                }
                break;
        }
        this.calculatePrice();
        this.calculateCalories();
    }

    addTopping(topping) {
            this.toppings.push(topping);
    }

    removeTopping(topping) {
            this.toppings.splice(this.toppings.indexOf(topping), 1);
    }

    calculatePrice() {
        let price = this.size.price + this.extras.price;
        this.toppings.forEach(item => price += item.price);
        document.querySelector('.price').innerText = price + " RUB";
    }

    calculateCalories() {
        let calorie = this.size.calorie + this.extras.calorie;
        this.toppings.forEach(item => calorie += item.calorie);
        document.querySelector('.calorie').innerText = calorie + " kCal";
    }
}

const menu = new Menu();
const burger = new Burger(menu);
document.querySelector('#form').addEventListener('change', (event) => burger.changeIngredient(event.target));


