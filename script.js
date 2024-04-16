const colourPicker = document.getElementById('colourPicker');
const previewBox = document.getElementById('previewBox');

colourPicker.addEventListener('input', function() {
    const colour = colourPicker.ariaValueMax;
    previewBox.style.backgroundColour = colour;

});