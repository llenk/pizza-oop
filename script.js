class Pizza {
    constructor(toppings) {
        this.base = 'cheese';
        this.toppings = toppings;
    }
    pizzaCost() {
        return (10 + this.toppings.length*.99);
    }
}

class SmallPizza extends Pizza {
    constructor(toppings) {
        super(toppings);
    }
    pizzaCost() {
        return (8.99 + this.toppings.length*.99);
    }
}

class MediumPizza extends Pizza {
    constructor(toppings) {
        super(toppings);
    }
    pizzaCost() {
        return (10.99 + this.toppings.length*.99);
    }
}

class LargePizza extends Pizza {
    constructor(toppings) {
        super(toppings);
    }
    pizzaCost() {
        let cost = 12.99 + this.toppings.length*.99;
        let pineappleCost = 0;
        this.toppings.forEach(function(item, value) {
            if (value=='pineapple') {
                pineappleCost++;
            }
        });
        return cost+pineappleCost;
    }
}

class Order {
    constructor(pizzas) {
        this.pizzas = pizzas;
    }
    orderCost() {
        let cost = 0;
        for (let i=0; i<this.pizzas.length; i++) {
            cost += this.pizzas[i].pizzaCost();
        }
        return cost;
    }
}

const pizza = new LargePizza(['mushrooms']);
const order1 = new Order([pizza, new MediumPizza(['spinach', 'pineapple'])]);

console.log(pizza.pizzaCost());
console.log(order1.orderCost());