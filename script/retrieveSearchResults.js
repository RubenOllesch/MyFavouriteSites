(function (retrieveChaynsSites, chayns, window, undefined) {
 
    'use strict';
 
    retrieveChaynsSites.init = function init(url, callback) {
        _fetchJSON(url, callback);
    };

    function _fetchJSON(url, callback) {
        fetch(url)
        .then(_validateResponse)
        .then(_readResponseAsJSON)
        .then(function(json) {
            callback(json);
        })
        .catch(_logError);
    }

    function _validateResponse(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    function _readResponseAsJSON(response) {
        return response.json();
    } 
      
    function _logError(error) {
        console.log('Error: \n', error);
    }  
 
})((window.retrieveChaynsSites = {}), chayns, window);