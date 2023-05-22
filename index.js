class Category {
    category_name = "";
}
class Recipe extends Category{
    name = "";
    ingredient = "";
    price = 0;
    constructor (name, ingredient, price, category_name) {
        super(category_name);
        this.category_name = category_name;
        this.name = name;
        this.ingredient = ingredient;
        this.price = price;
    }
}
let recipe = [];
let dish2 = new Recipe("Kyay Teao", "bla bla bla", 10, "Thai Food");
let dish1 = new Recipe("Pasta", "bla bla bla", 20, "Italian Food");
recipe.push(dish1, dish2);
console.log(recipe);



