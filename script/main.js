'use strict';

const searchResultBox = document.querySelector('#SearchResultBox');
const searchURL = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50';

//Sets up the Tapp
chayns.ready.then(function () {
    addFormHandler();
    addEventListeners();
});

function addEventListeners() {
    document.querySelector('#searchSiteInput').addEventListener('input', function() {
        retrieveChaynsSites.init(searchURL, displayResults);
    });

    document.querySelector('#showMoreButton').addEventListener('click', function() {
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