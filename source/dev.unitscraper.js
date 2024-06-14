function getHrefValues(className) {
    // Automatically include elements with class "_dwmetq"
    const elements = document.querySelectorAll(`a[role="button"][class="${className}"]`);
    const hrefValues = Array.from(elements).map(element => element.getAttribute('href'));
    return hrefValues;
}

// quiz button classes
const classNames = ['_1w2ulnnd', '_1jmukqkc'];

let hrefArray = [];

classNames.forEach(className => {
    const hrefs = getHrefValues(className);
    hrefArray.push(...hrefs);
});

console.log(hrefArray);

/* old

// Function to find elements by class name and extract href attributes
function getHrefValues(className) {
    // Find all elements with the given class name
    const elements = document.querySelectorAll(`a[role="button"][class="${className}"]`);
    
    // Extract href values and store them in an array
    const hrefValues = Array.from(elements).map(element => element.getAttribute('href'));
    
    return hrefValues;
}

// Define the classes of interest
const classNames = ['_1w2ulnnd', '_1jmukqkc'];

// Initialize an empty array to hold all href values
let hrefArray = [];

// Loop through each class name and add its href values to the array
classNames.forEach(className => {
    const hrefs = getHrefValues(className);
    hrefArray.push(...hrefs); // Spread operator to add all items from the array
});

// Log the final array of href values
console.log(hrefArray);


*/