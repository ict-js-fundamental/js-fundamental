const categories = require("./category");
const recipes = require("./recipe");
let category = "";
for (let index = 0; index < recipes.length; index++) {
    category = categories.find((category) => {
        return category.id == recipes[index].category;
    });
    recipes[index].category = category.name;
}
let dishes = recipes;
console.log(dishes);
module.exports = dishes;