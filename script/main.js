'use strict';

const searchResultBox = document.querySelector('#SearchResultBox');
const searchInput = document.querySelector('#searchInput');
const showMoreButton = document.querySelector('#showMoreButton');
const MAX_RESULTS = 10;
var skipResults = 0;

//Sets up the Tapp
chayns.ready.then(function () {
    searchHandler.init(searchResultBox);
    addFormHandler();
    addEventListeners();
});

function addEventListeners() {
    searchInput.addEventListener('input', function() {
        var searchString = searchInput.value;
        var searchURL = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchString + '&Skip=' + skipResults + '&Take=' + MAX_RESULTS;

        var searchData = retrieveJSON.init(searchURL)
        searchData.then(function(data){
            plotSearchResults.init(data, searchResultBox)
        })
        .catch(function(error){
            console.log(error);
        });
    });

    showMoreButton.addEventListener('click', function() {
        showMore();
    });
}

function addFormHandler() {
    var inputFields = {
        nameOfSite: '#nameOfSite',
        addressOfSite: '#addressOfSite',
        mailForSite: '#mailForSite',
        commentForSite: '#commentForSite'
    }
    var sendButton = '#sendFormButton';
    formHandler.init(inputFields, sendButton);
}

function displayResults(data) {
    console.log(data);
    plotSearchResults.init(data, searchResultBox);
}