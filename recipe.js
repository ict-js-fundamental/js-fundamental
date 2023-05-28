let id = [1,2,3,4,5,6];
let name = ["Tempura", "Bibimbap", "Sushi", "Kyay Teao", "Pasta", "Ramen"];
let price = [20, 10, 50, 10, 60, 10];
let category = [1, 4, 1, 2, 3, 1];
class Recipe {
    id;
    name;
    price;
    category;
    constructor (id, name, price, category) {
        this.id = id;
        this.name = name; 
        this.price = price;
        this.category = category;
    }
}
let recipes = [];
for (let index = 0; index < id.length; index++) {
    let recipe = new Recipe(id[index], name[index], price[index], category[index]);
    recipes.push(recipe);
}
module.exports = recipes;
