function getHrefValues(className) {
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

var h4Elements = document.getElementsByTagName('h4');
for (var i = 0; i < h4Elements.length; i++) {
    if (h4Elements[i].innerText.includes("Quiz ")) {
        var aChildren = h4Elements[i].getElementsByTagName('a');
        for (var j = 0; j < aChildren.length; j++) {
            hrefArray.push(aChildren[j].href)
        }
    }
}

    var h4Elements = document.getElementsByTagName('h4');
    for (var i = 0; i < h4Elements.length; i++) {
        if (h4Elements[i].innerText.includes("Unit test")) {
            var aChildren = h4Elements[i].getElementsByTagName('a');
            for (var j = 0; j < aChildren.length; j++) {
                hrefArray.push(aChildren[j].href)
            }
        }
    }

// from here, hrefArray contains every lesson necessary to complete

document.write("")