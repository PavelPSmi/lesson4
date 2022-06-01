//Task1.1
class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
};


let product1 = new product("товар1", 500);
product1.make25PercentDiscount();

console.log(product1);
//task1.2
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = text;
    }
};

let Post1 = new Post("коньяк","Десятилетний",2010);
console.log(Post1.text);

class AttachedPost {
    constructor(author, text, date) {
        Post.call(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
};

AttachedPost.prototype = Object.create(Post.prototype);


