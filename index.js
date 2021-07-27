//Target all DIV from class = price and store in array called PRICES
const PRICES = document.getElementsByClassName("price");
//Target all the ADD TO LIST buttons for items
const ADD_TO_LIST_BUTTONS = document.getElementsByClassName("addItem");
/*Target the cart which will display items added to list
and allow us to close the shopping list and view it
before we can checkout*/
const VIEW_CART = document.getElementById("viewCart");
//Target the modal which displays shopping list
const MODAL = document.getElementById("shoppingList");
//Target the actual list we want to populate
const SHOPPING_LIST = document.getElementById("list");
//Target the checkout button to complete shopping
const CHECKOUT_BUTTON = document.getElementById("checkout");
//Target the input for displaying total of all items
const TOTAL = document.getElementById("total");
//Will track be used to set the element total
let totalCost = 0;
//Keeps count of items in shopping list
let numberOfItems = 0;

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

 /*When the VIEW_CART is clicked, we want to view the shoppinglist 
 or close it f it was already open */
VIEW_CART.onclick = ()=>{

    if(MODAL.style.display === "none"){

        MODAL.style.display = "flex";
    }else{

        MODAL.style.display = "none";
    }
} 

/*When we click on any of the ADD TO LIST buttons
we must test if the item is available and update
number of items in list if it is available, update
total cost and append item to list.
Else, report the item is not available*/
for(let i = 0;i < STOCK.length;i++){

    //When button is clicked
    ADD_TO_LIST_BUTTONS[i].onclick  = ()=>{
        //Test the item selected is in stock
        if(STOCK[i]["quantity"] > 0){
            //call method to append item to list
            addToShoppingList(i);
            //update total cost
            increaseTotalCost(i);
            //update number of items in list
            incrementNumberOfItems(i);
        }
    }
}

//Adds an item to the list
const addToShoppingList = (index)=>{
    //create element to append to list
    let listElem = document.createElement("li");
    let text = document.createTextNode(STOCK[index]["name"] + " R" + STOCK[index]["price"]);
    listElem.appendChild(text);

    //create a delete button and append to listElem
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    listElem.appendChild(deleteButton);

    //append to shopping list
    SHOPPING_LIST.appendChild(listElem);

    //When the delete button is clicked remove child decrement items on list and reduce total
    deleteButton.onclick = ()=>{

        SHOPPING_LIST.removeChild(listElem);
    }
}

//Increases the totalCost
const increaseTotalCost = (index)=>{

    totalCost += STOCK[index]["price"];
    TOTAL.value = totalCost;
}

//Increases number of items in the list
const incrementNumberOfItems = (index)=>{

    numberOfItems ++;
    VIEW_CART.innerHTML = numberOfItems;
}