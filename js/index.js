'use strict';

var FADE_TIME = 1500; // milliseconds
var BUTTON_TEXT = ['NIGHT', 'DAY'];
var COLORS = {
    text: ['black', 'white'],
    body: ['white', '#333']
};

var index = 0;

// Toggle light mode on load as a demo
toggleLightMode();

// Toggle light mode when Night/Day button pressed
$('#light-button').click(toggleLightMode);

// Toggle light mode
function toggleLightMode() {

    // Increment color index
    index = (index + 1) % 2;

    // Toggle text color
    changeColor('a, .light-button, .content-description', {
        color: COLORS.text[index],
        borderColor: COLORS.text[index]
    });

    // Toggle body color
    changeColor('body', {
        backgroundColor: COLORS.body[index]
    });

    // Toggle text on Night/Day button
    $('.light-button').text(BUTTON_TEXT[index]);
}

// Change colors of given elements
function changeColor(elements, options) {
    $(elements).animate(options, {
        duration: FADE_TIME,
        queue: false
    }); 
}