'use strict';

var ProximityManager = {
    init: function() {

    },
    userproximity: function(callback) {
        window.addEventListener('userproximity', callback);
    },
    deviceproximity: function(callback) {
        window.addEventListener('deviceproximity', callback);
    }
};
