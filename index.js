//Target all DIV from class = price and store in array called PRICES
const PRICES = document.getElementsByClassName("price");
//Target all the ADD TO LIST buttons for items
const ADD_TO_LIST_BUTTONS = document.getElementsByClassName("addItem");

/*The items sold at the tuck shop will be represented by objects
which have properties: name, price and quantity for each product*/

const COKE={
    name: "Coca-cola",
    price: 10.00,
    quantity: 10
};

const PIE={
    name: "Pie",
    price: 15.00,
    quantity: 5
};

const LOLLIPOP={
    name: "Lollipop",
    price: 1.50,
    quantity: 10
};

const SNACKS={
    name: "Snacks",
    price: 5.00,
    quantity: 10
};

const JUICE={
    name: "Juice",
    price: 5.00,
    quantity: 10
};

const SANDWICH={
    name: "Sandwich",
    price: 15.00,
    quantity: 3
};

const COOKIES={
    name: "Cookies",
    price: 3.50,
    quantity: 7
};

const ICE_CREAM={
    name: "IceCream",
    price: 5.00,
    quantity: 6
};

const CHOCOLATE={
    name: "Chocolate",
    price: 7.50,
    quantity: 4
};

/*Store all objects in an array*/
const STOCK = [COKE,PIE,LOLLIPOP,SNACKS,JUICE,SANDWICH,COOKIES,ICE_CREAM,CHOCOLATE];


/*When the app starts up we want the prices to be set accordingly
for all the products in the shop*/
for(let i = 0; i < PRICES.length;i++){
    PRICES[i].innerHTML = "R " + STOCK[i]["price"];
 }