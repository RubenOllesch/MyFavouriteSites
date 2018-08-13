(function (plotSearchResults, chayns, window, undefined) {
 
    'use strict';

    const MAX_RESULTS = 10;
 
    plotSearchResults.init = function init(searchData, displayTarget) {
        _iterateOverJSON(searchData, displayTarget);
    };

    function _iterateOverJSON(searchData, displayTarget) {
        _clearResultBox();
        var searchResults = searchData.Data;
        console.log(searchResults);
        var size = Math.min(searchResults.length, MAX_RESULTS)
        for (var i = 0; i < size; i++) {
            var itemData = searchResults[i];
            _addToResultBox(itemData, displayTarget);
        }
    }

    function _addToResultBox(itemData, displayTarget) {
        displayTarget.innerHTML += _siteDataToHTML(itemData);
    }

    function _clearResultBox(displayTarget) {
        displayTarget.innerHTML = '';
    }
 
    function _siteDataToHTML(siteData) {
        var imgURL = 'https://chayns.tobit.com/storage/72418-10719/Images/icon-72.png?_=1534157532';
        var headline = siteData.appstoreName;
        var description = 'Sample Text';
        var listItem = 

                '<div class="ListItem ListItem--clickable">'
            +       '<div class="ListItem__head">'
            +           '<div class="ListItem__Image">'        
            +               '<img src="' + imgURL + '">'                      
            +           '</div>'
            +           '<div class="ListItem__Title">'
            +               '<p class="ListItem__Title--headline">'
            +                   headline
            +               '</p>'
            +               '<p class="ListItem__Title--description">'
            +                   description
            +               '</p>'
            +           '</div>'
            +       '</div>'
            +   '</div>';

        return listItem;
    }
 
})((window.plotSearchResults = {}), chayns, window);