const customers = require("./customer");
const dishes = require("./dishes");
let cart_id = [1,2];
let customer_id = [1,1];  
let dish_id = [3,6];
let quantity = [2,4];
class Cart {
    id;
    customer;
    dish;
    quantity;
    constructor (id, customer, dish, quantity) {
        this.id = id;
        this.customer = customer;
        this.dish = dish; 
        this.quantity = quantity;
    }
}
let carts = [];
for (let index = 0; index < customer_id.length; index++) {
    let order = customers.find((customer) => {
        return customer.id == customer_id[index];
    });
    let dish = dishes.find((dish) => {
        return dish.id == dish_id[index];
    })
    let cart = new Cart (cart_id[index], order, dish, quantity[index]);
    carts.push(cart);
}
console.log(carts);


