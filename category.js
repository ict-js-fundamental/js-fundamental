let id = [1,2,3,4,5]
let name = [
    "Japanese Food", "Chinese Food", "Burmese Food", "Thai Food", "Italian Food"
];
class Category {
    id;
    name;
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
}
let categories = [];
for (let index = 0; index < name.length; index++) {
    let data = new Category (id[index], name[index]);
    categories.push(data);
}
module.exports = categories;




