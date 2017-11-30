var tax = 15.00

var myShoppingCart = [];

var item1 = {
    name: "leather jacket",
    price: 20,
    quantity: 1

};

var item2 = {
    name: "parka jacket",
    price: 30,
    quantity: 1
};

var inventory = [item1, item2];

function addToCart(itemName){
    var itemFound = false;
    for (var i = 0; i < myShoppingCart.length;i++){
        if (myShoppingCart[i].name === itemName){
            myShoppingCart[i].quantity++;
            itemFound = true;
            break;
        }
    }

    if (!itemFound){
        for (var i = 0; i < inventory.length;i++){
            if(inventory[i].name === itemName){
                myShoppingCart.push(inventory[i]);
            }
        }
    }
}
