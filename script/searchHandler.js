(function (searchHandler, chayns, window, undefined) {
 
    'use strict';

    var displayTarget;

    var skipResults = 0;
    const maxResultsAtOnce = 10;

    searchHandler.init = function init(pDisplayTarget) {
        displayTarget = pDisplayTarget;   
        plotSearchResults.init(pDisplayTarget);
    };

    searchHandler.search = function search(searchString, newSearch) {
        if (newSearch) {
            skipResults = 0;
        }
        else {
            skipResults += maxResultsAtOnce;
        }

        var searchURL = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchString + '&Skip=' + skipResults + '&Take=' + maxResultsAtOnce;

        var searchData = retrieveJSON.init(searchURL);
        searchData.then(function(data){
            plotSearchResults.displayResults(data, newSearch)
        })
        .catch(function(error){
            console.log(error);
        });
    }
 
})((window.searchHandler = {}), chayns, window);