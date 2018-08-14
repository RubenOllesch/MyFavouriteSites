(function (retrieveJSON, chayns, window, undefined) {
 
    'use strict';
 
    retrieveJSON.init = function init(url) {
        return _fetchJSON(url);
    };

    function _fetchJSON(url) {
        return new Promise(function(resolve, reject) {
            try {
                fetch(url).then(function(data) {
                    resolve(data.json());
                });
            }
            catch {
                reject(error);
            }
        });  
    }
 
})((window.retrieveJSON = {}), chayns, window);