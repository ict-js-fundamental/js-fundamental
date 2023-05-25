let id = [1, 2, 3];
let name = ['Kyay Teao', 'Tempura', 'Raman'];
let price = [20, 50, 40];
let ingredients = ['noodle, onion, salt', 'shrimp, noodle, potato', 'noodle, egg, chicken'];
let category = [4, 1, 1];
class Recipe {
    id;
    name; 
    price; 
    ingredients;
    category;
    constructor (id, name, price, ingredients, category) {
        this.id = id;
        this.name = name; 
        this.price = price;
        this.ingredients = ingredients;
        this.category = category;
    }
}
let recipes = []
for (let index = 0; index < id.length; index++) {
    let data = new Recipe (id[index], name[index], price[index], ingredients[index], category[index]);
    recipes.push(data);
}
module.exports = recipes;

