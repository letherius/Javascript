let product;
let price=1000;
let quantity=1;
let cart=1.0;
let tax=0.04;

let user1="admin";
let pass1="password";

let userName=prompt('Enter your username:"admin" ');
let password=prompt('Enter your password:"password" ');
console.log(userName,password);

function Checkout(){
    product=prompt("What are you Buying?")
    quantity=prompt("How many would you like to purchase?")
    cart=price*quantity
    total=(cart*tax) + cart
    console.log(product ,quantity ,cart , tax, total)}

function displayInfo(){
    document.write(`
   <p>Product: ${product}</p>
   <p>Quantity: ${quantity}</p>
   <p>Cart: ${cart}</p>
   <p>Tax: ${tax}</p>
   <p>Total: ${total}</p>
   `)
}
Checkout()
displayInfo()

