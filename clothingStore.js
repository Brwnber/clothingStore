var taxRate = 0.05
var shippingRate = 15.00
var myShoppingCart = [];

var item1 = {
    name: "leather jacket",
    price: 20.00,
    quantity: 1

};

var item2 = {
    name: "parka jacket",
    price: 30.00,
    quantity: 1
};

var inventory = [item1, item2];

function addToCart(itemName){
    let itemFound = false;
    for (let i = 0; i < myShoppingCart.length;i++){
        if (myShoppingCart[i].name === itemName){
            myShoppingCart[i].quantity++;
            itemFound = true;
            break;
        }
    }

    if (!itemFound){
        for (let i = 0; i < inventory.length;i++){
            if(inventory[i].name === itemName){
                myShoppingCart.push(inventory[i]);
            }
        }
    }
    saveCart();
}

function removeFromCart(itemName){
    for (let i in myShoppingCart) {
        if(myShoppingCart[i].name === itemName){
            myShoppingCart[i].quantity--;
            if(myShoppingCart[i].quantity === 0) {
                myShoppingCart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}

function removeFromCartAll(itemName){
    for (let i in myShoppingCart) {
        if (myShoppingCart[i].name === itemName) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

function clearCart() {
    myShoppingCart = [];
    saveCart();
}

function countCart() {
    let totalCount = 0;
    for (let i in myShoppingCart) {
        totalcount += myShoppingCart[i].quantity;
    }
    return totalCount;
}

function totalCart() {
    let totalCost = 0;
    for (let i in myShoppingCart) {
        totalCost += myShoppingCart[i].price;
    }
    return totalCost;
}

function listCart(){
    let cartCopy = [];
    for (let i in myShoppingCart){
        let item = myShoppingCart[i];
        let itemCopy = {};
        for (let p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(myShoppingCart));
}

function loadCart() {
    myShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
