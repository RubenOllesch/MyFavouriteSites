(function (plotSearchResults, chayns, window, undefined) {
 
    'use strict';
 
    plotSearchResults.init = function init(searchData, displayTarget) {
        _iterateOverJSON(searchData, displayTarget);
    };

    function _iterateOverJSON(searchData, displayTarget) {
        _clearResultBox(displayTarget);
        console.log(searchData);
        if (searchData.ResultCode === 0) {
            var searchResults = searchData.Data;
            var numberOfResults = searchResults.length;
            for (var i = 0; i < numberOfResults; i++) {
                var itemData = searchResults[i];
                _addToResultBox(itemData, displayTarget);
            }
        }
        else {
            //_errorMessage(displayTarget);
        }      
    }

    function _addToResultBox(itemData, displayTarget) {
        displayTarget.innerHTML += _siteDataToHTML(itemData);
    }

    function _clearResultBox(displayTarget) {
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

    function _errorMessage(displayTarget) {
        displayTarget.innerHTML = 'Keine Seiten für diesen Suchbegriff'
    }
 
})((window.plotSearchResults = {}), chayns, window);