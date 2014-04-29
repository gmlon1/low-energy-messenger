'use strict';

var CallScreen = {
    mainScreen: document.getElementById('mainscreen'),
    callScreen: document.getElementById('callscreen'),
    hangupButton: document.querySelector('button#hangup'),
    nearBox: document.getElementById('near'),
    minBox: document.getElementById('min'),
    maxBox: document.getElementById('max'),
    deviceProximityBox: document.getElementById('deviceproximity'),
    signal: document.getElementById('signal'),
    /* 
     * init
     * Initialize the object
     */
    init: function() {

        this.callScreen.style.height = window.innerHeight + 'px';
        this.hangupButton.onclick = this.hangup;

        var self = this;        

        console.log('adding listener on userproximity');
        ProximityManager.userproximity(function(event) {
            console.log('userproximity');

            if (event.near) {
                self.nearBox.innerHTML = 'Near';
                self.hideView();
            }
            else {
                self.nearBox.innerHTML = 'Not near';
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

//        self.startAnimation();
//        window.setInterval(function() {
//            self.stopAnimation();
//            self.startAnimation();
//        }, 4000);
    },
    startAnimation: function() {
        var self = this;
        window.setTimeout(function() {
            self.signal.setAttribute('class', 'call');
        }, 100);
    },
    stopAnimation: function() {
        this.signal.setAttribute('class', '');
    },
    hideView: function() {
        this.callScreen.setAttribute('class', 'off');
    },
    showView: function() {
        this.callScreen.setAttribute('class', 'on');
    },
    show: function() {
        App.clearPages();
        App.scrollTop();
        this.callScreen.style.display = 'block';
    },
    hangup: function() {
        App.clearPages();
        Chat.show();
    }
};
