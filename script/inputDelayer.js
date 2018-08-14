/*
 * calls a function when the input has not changed for a certain amount of time
 */
(function (inputDelayer, chayns, window, undefined) {
 
    'use strict';

    var lastTimeout = 0;
 
    inputDelayer.init = function init(input, delay, callback) {
        input.addEventListener('input', function() {           
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(callback, delay);
        });
    };
 
})((window.inputDelayer = {}), chayns, window);