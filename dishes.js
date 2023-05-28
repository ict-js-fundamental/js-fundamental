let categories = require('./category');
let recipes = require('./recipe');

for (let index = 0; index < recipes.length; index++) {
    let category = categories.find((category) => {
        return category.id == recipes[index].category;
    });
    recipes[index].category = category.name;
}
let dishes = recipes;
module.exports = dishes;