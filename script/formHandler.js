(function (formHandler, chayns, window, undefined) {
 
    'use strict';
 
    formHandler.init = function init(inputFields, sendButton) {
        _setupSendButton(inputFields, sendButton);
    };
 
    function _setupSendButton(inputFields, sendButton) {
        document.querySelector(sendButton).addEventListener('click', function() {
            _sendForm(inputFields);
        });
    }

    function _sendForm(inputFields) {
        var jsonMessage = _getValues(inputFields);
        console.log(jsonMessage);
        chayns.showWaitCursor();
        chayns.intercom.sendMessageToPage(jsonMessage)
        .then(function(data) {
            _clearTextInputs(inputFields);
            chayns.hideWaitCursor();
            if(data.status === 200) {
                chayns.dialog.alert('Danke für deine Beantragung');
            }
        });
    }

    //returns object with the values of the textinputs
    function _getValues(inputFields) {
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

    function _clearTextInputs(inputFields) {
        var inputFieldIDs = Object.values(inputFields);
        for (var key in inputFields) {
            document.querySelector(inputFieldIDs[key]).value = '';
        }
    }
 
})((window.formHandler = {}), chayns, window);