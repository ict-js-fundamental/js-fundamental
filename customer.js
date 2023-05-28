let id = [1, 2];
let name = ["John Doe", "Mary"];
let phone = ["0987654321", "0987654321",];
let address = ["Hlaing Thar Yar", "Insein"];
class Customer {
    id;
    name;
    phone; 
    address; 
    constructor (id, name, phone, address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
let customers = [];
for (let index = 0; index < id.length; index++) {
    let customer = new Customer(id[index], name[index], phone[index], address[index]);
    customers.push(customer);
}

module.exports = customers;