console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.
let basket = [];

//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added

function addItem(item){
    basket.push(item);
    if(item === basket.push){
        return true;
    }
    else{
        return false;
    }
}

console.log('Adding items to basket:', addItem());
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line

function listItems(){
    for (i = 0; i < basket.length; i++){
    return basket;
    }
}

console.log('Listing items in basket:', listItems());

//Create a function called empty. It should:
//reset the basket to an empty array

function empty(){
    basket = [];
}
empty();
console.log('Emptied basket', basket);