// Java script for alt.html only

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text');
    const text = "Claire Spindler";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }

    type();
});



