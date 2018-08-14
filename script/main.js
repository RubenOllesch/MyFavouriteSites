'use strict';

const searchResultBox = document.querySelector('#SearchResultBox');
const searchInput = document.querySelector('#searchInput');
const showMoreButton = document.querySelector('#showMoreButton');

//Sets up the Tapp
chayns.ready.then(function () { 
    searchHandler.init(searchResultBox);
    addFormHandler();
    addEventListeners();
});

function addEventListeners() {
    searchInput.addEventListener('input', function() {
        searchHandler.search(searchInput.value, true);
    });

    showMoreButton.addEventListener('click', function() {
        searchHandler.search(searchInput.value, false);
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