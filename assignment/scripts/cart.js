console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.
let basket = [];

//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added

function addItem(){
    basket.push('item1');
    basket.push('item2');
    basket.push('item3');
    basket.push('item4');
    return true;
}

addItem();
console.log(addItem);
console.log('Adding items to basket', basket);

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line

function listItems(){
    for (i in basket){
        console.log('Listing items in basket', basket[1]);
    }
}

listItems();
console.log('Listing items in basket', basket[1])

//Create a function called empty. It should:
//reset the basket to an empty array

function empty(){
    basket = [];
}
empty();
console.log('Emptied basket', basket);