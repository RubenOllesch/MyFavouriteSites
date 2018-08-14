'use strict';

const formInputFields = {
    nameOfSite: '#nameOfSite',
    addressOfSite: '#addressOfSite',
    mailForSite: '#mailForSite',
    commentForSite: '#commentForSite'
}
const formSendButton = document.querySelector('#formSendButton');

const searchInput = document.querySelector('#searchInput');
const searchResultBox = document.querySelector('#SearchResultBox');
const showMoreButton = document.querySelector('#showMoreButton');

const inputDelay = 300;

//Sets up the Tapp
chayns.ready.then(function () { 
    searchHandler.init(searchResultBox);
    plotSearchResults.init(searchResultBox);
    setupInputs();   
    formHandler.init(formInputFields, formSendButton);
});

function setupInputs() {
    inputDelayer.init(searchInput, inputDelay, function() {
        searchHandler.search(searchInput.value, true);
    });

    showMoreButton.addEventListener('click', function() {
        searchHandler.search(searchInput.value, false);
    });
}