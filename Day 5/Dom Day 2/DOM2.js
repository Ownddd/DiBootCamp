// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

// Create a function called highlight()
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

// Create a function called returnItemsToDefault()
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

// Call the function getBoldItems on page load
getBoldItems();

// Add event listeners to the paragraph for mouseover and mouseout
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
