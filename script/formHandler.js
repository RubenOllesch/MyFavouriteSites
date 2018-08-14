(function (formHandler, chayns, window, undefined) {
 
    'use strict';

    var inputFields;
    var sendButton;
 
    formHandler.init = function init(pInputFields, pSendButton) {
        inputFields = pInputFields;
        sendButton = pSendButton;
        sendButton.addEventListener('click', function() {
            _sendForm();
        });
    };

    function _sendForm() {
        console.log('click');
        
        var jsonMessage = _getValues();
        console.log(jsonMessage);
        chayns.showWaitCursor();
        chayns.intercom.sendMessageToPage(jsonMessage)
        .then(function(data) {
            _clearTextInputs();
            chayns.hideWaitCursor();
            if(data.status === 200) {
                chayns.dialog.alert('Danke für deine Beantragung');
            }
        });
    }

    //returns object with the values of the textinputs
    function _getValues() {
        var inputValues = {};
        var inputFieldNames = Object.keys(inputFields);
        var inputFieldIDs = Object.values(inputFields);

        for (var i in inputFieldIDs) {
            var value = document.querySelector(inputFieldIDs[i]).value;
            var valueName = inputFieldNames[i];
            inputValues[valueName] = value;
        }
        return inputValues;
    }

    function _clearTextInputs() {
        var inputFieldIDs = Object.values(inputFields);
        for (var key in inputFields) {
            document.querySelector(inputFieldIDs[key]).value = '';
        }
    }
 
})((window.formHandler = {}), chayns, window);