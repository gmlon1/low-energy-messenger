'use strict';

var CallScreen = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {

        /* Initialize DOM elements */
        this.mainScreen = document.getElementById('mainscreen');
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

        console.log('adding listener on userproximity');
        ProximityManager.userproximity(function(event) {
            console.log('userproximity');

            if (event.near) {
                self.nearBox.innerHTML = 'true';
                self.hideView();
            }
            else {
                self.nearBox.innerHTML = 'false';
                self.showView();
            }
        });

        console.log('adding listener on deviceproximity');
        ProximityManager.deviceproximity(function(event) {
            console.log('deviceproximity');
            self.minBox.innerHTML = event.min;
            self.maxBox.innerHTML = event.max;
            self.deviceProximityBox.innerHTML = event.value;
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
