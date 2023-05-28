let id = [1,2,3,4];
let name = ["Japanese Food", "Thai Food", "Italian Food", "Korean Food"];
class Category {
    id;
    name;
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
}
let categories = [];
for (let index = 0; index < id.length; index++) {
    let category = new Category(id[index], name[index]);
    categories.push(category);
}
module.exports = categories;
