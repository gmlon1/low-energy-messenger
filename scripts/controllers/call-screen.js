'use strict';

var CallScreen = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {

        /* Initialize DOM elements */
        this.callScreen = document.getElementById('callscreen');
        this.hangupButton = document.querySelector('button#hangup');
        this.nearBox = document.getElementById('near');
        this.minBox = document.getElementById('min');
        this.maxBox = document.getElementById('max');
        this.deviceProximityBox = document.getElementById('deviceproximity');

        this.callScreen.style.height = window.innerHeight + 'px';
        this.hangupButton.onclick = this.hangup;

        /* Handle the proximity */

        var self = this;

        ProximityManager.userproximity(function(event) {
            
            /* Log */
            console.log(event);
            self.nearBox.innerHTML = event.near;
            
            /* Turn the screen off/on */
            if (event.near) {
                self.hideView(); // turn off the screen when the user is near
            }
            else {
                self.showView();
            }
        });

        ProximityManager.deviceproximity(function(event) {
            
            /* Log */
            console.log(event);
            self.minBox.innerHTML = event.min;
            self.maxBox.innerHTML = event.max;
            self.deviceProximityBox.innerHTML = event.value;

            /* Turn the screen off/on */
            if (event.value <= 1) {
                self.hideView(); // turn off the screen when the device proximity is less or equal to 1 cm
            }
            else {
                self.showView();
            }
        });
    },
    /* 
     * hideView
     * Turn off the screen 
     */
    hideView: function() {
        this.callScreen.setAttribute('class', 'off');
    },
    /* 
     * showView
     * Turn on the screen 
     */
    showView: function() {
        this.callScreen.setAttribute('class', 'on');
    },
    /* 
     * call
     * Show the callscreen page and start the call
     */
    call: function() {
        App.clearPages();
        App.scrollTop();
        this.callScreen.style.display = 'block';
    },
    /* 
     * hangup
     * Hungup the call and come back to the chat screen 
     */
    hangup: function() {
        App.clearPages();
        Chat.show();
    }
};
