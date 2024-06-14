function getHrefValues(className) {
    // Updated to include only <a> tags with data-testid="unit-header" and class="_dwmetq"
    const elements = document.querySelectorAll(`a[data-testid="unit-header"][class="${className}"]`);
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
