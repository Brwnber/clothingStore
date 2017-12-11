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

/* Trying out new code
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
}*/

var Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
}

function addItemToCart(name, price, count) {
    for (var i in myShoppingCart) {
        if (myShoppingCart[i].name === name) {
            myShoppingCart[i].count += count;
            return
        }
    }
    var item = new item(name, price, count);
    myShoppingCart.push(item);
}

function removeFromCart(name){
    for (let i in myShoppingCart) {
        if(myShoppingCart[i].name === name){
            myShoppingCart[i].count --;
            if(myShoppingCart[i].count === 0) {
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
        totalCost += myShoppingCart[i].price * myShoppingCart[i].quantity;
    }
    return totalCost.toFixed(2);
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
displayCart();

//JQUERY

$(".add-to-cart").click(function(event){ //<---this is adding cart
    event.preventDefault();
    let name = $(this).attr("data-name"); //<---replace these selectors with classes/ids provided by the html
    let price = Number($(this).attr("data-price"));

    addItemToCart(name, price, 1);
    displayCart();
});

        //v--replace this with the parent of the remove button
$(".cartlistsdiv").on("click",".deleteitem", function(){ //<---this is our removeall function
    let name = $(this).attr("name");//^--replace this with class/id of remove button

    removeFromCartAll(itemName);
    displayCart();
});

$("#b2").on("click",function(){
    let name = $("p2").text();
    removeFromCart(name);
    displayCart();
});
  //v---replace this with the class/id of the button
$("#b1").on("click",function(){
    let name = $("p1").text();
    addToCart(name);//^--replace that selector with class/id of the paragraph
    displayCart();
})

$("clearCart").click(function(){ //<---This is clear cart
    clearCart();
    displayCart();
});

function displayCart() {
    let cartArray = listCart();
    let output = "";
    for (let i in cartArray) {
        output += "<li>"+cartArray[i].name+" "+cartArray[i].count+"</li>"
    }
    $("#show-cart").html(output)
    $("#totalcart").html(totalCart());
}