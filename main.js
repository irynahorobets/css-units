(function() {
    const units = ['px', 'rem'];
    const elements = Array.from(document.getElementsByClassName("unit-title"));
    elements.forEach((element, index) => {
        element.innerHTML = units[index] + ' example';
    });
    const textElements = Array.from(document.getElementsByClassName("example-text"));
    textElements.forEach((element, index) => {
        element.innerHTML = 'Try adjusting browser default font-size to see how the text size changes.';
    });
})();