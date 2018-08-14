(function (plotSearchResults, chayns, window, undefined) {
 
    'use strict';

    var displayTarget;
 
    plotSearchResults.init = function init(pDisplayTarget) {
        displayTarget = pDisplayTarget;
    };

    plotSearchResults.displayResults = function displayResults(searchData, newSearch) {
        if (newSearch) {
            _clearResultBox();
        }
        console.log(searchData);
        if (searchData.ResultCode === 0) {
            var searchResults = searchData.Data;
            var numberOfResults = searchResults.length;
            for (var i = 0; i < numberOfResults; i++) {
                var itemData = searchResults[i];
                _addToResultBox(itemData);
            }
        }
        else {
            //_errorMessage();
        }      
    }

    function _addToResultBox(itemData) {
        displayTarget.innerHTML += _siteDataToHTML(itemData);
    }

    function _clearResultBox() {
        displayTarget.innerHTML = '';
    }
 
    function _siteDataToHTML(siteData) {
        var siteURL = 'https://chayns.net/' + siteData.siteId + '/aboutus';
        var iconURL = 'https://sub60.tobit.com/l/' + siteData.locationId;
        var headline = siteData.appstoreName;
        var description = 'Sample Text';
        var listItem = 

                '<div class="ListItem ListItem--clickable"  onclick="chayns.openUrlInBrowser(\'' + siteURL + '\');">'
            +       '<div class="ListItem__head">'
            +           '<div class="ListItem__Image">'        
            +               '<img src="' + iconURL + '">'                      
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

    function _errorMessage() {
        displayTarget.innerHTML = 'Keine Seiten für diesen Suchbegriff'
    }
 
})((window.plotSearchResults = {}), chayns, window);