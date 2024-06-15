function collectHrefValues() {
    const attrs = {
        'class': '_i2ouqbf',
        'tabindex': '0',
    };

    let hrefArray = [];

    let links = document.querySelectorAll('a[class="' + attrs['class'] + '"][tabindex="' + attrs['tabindex'] + '"]');

    links.forEach(link => {
        hrefArray.push(link.getAttribute('href'));
    });

    return hrefArray;
}

let hrefValues = collectHrefValues();
console.log(hrefValues);
