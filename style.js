$(document).ready(function() {
    $('img').mouseenter(function() {
        $('img').fadeTo('fast', 1.00);
    });
    $('img').mouseleave(function() {
        $('img').fadeTo('slow', 0.5);
});