//Task1.1
function product(name,price) {
    this.name = name;
    this.price = price;
};
product.prototype.make25PercentDiscount = function() {
    this.price = this.price - this.price * 0.25;
};


let product1 = new product("товар1", 500);
product1.make25PercentDiscount();

console.log(product1);
//task1.2
function Post(author, text, date) {
    this.author = author; 
    this.text = text; 
    this.date = date;
};
Post.prototype.edit = function() {
    this.text = text;
};

let Post1 = new Post("коньяк","Десятилетний",2010);
console.log(Post1.text);

function AttachedPost (author, text, date) {
    Post.call(author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}