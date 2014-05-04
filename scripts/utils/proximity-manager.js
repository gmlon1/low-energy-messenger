'use strict';

var ProximityManager = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {

    },
    /* 
     * userproximity
     * Register a callback function on the userproximity event
     * @param {Function} callback
     */
    userproximity: function(callback) {
        window.addEventListener('userproximity', callback);
    },
    /* 
     * deviceproximity
     * Register a callback function on the deviceproximity event
     * @param {Function} callback
     */
    deviceproximity: function(callback) {
        window.addEventListener('deviceproximity', callback);
    }
};
