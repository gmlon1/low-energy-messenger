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
        console.log("ProximityManager.userproximity(callback)");
        
        window.addEventListener('userproximity', callback); // Proximity API
    },
    /* 
     * deviceproximity
     * Register a callback function on the deviceproximity event
     * @param {Function} callback
     */
    deviceproximity: function(callback) {
        console.log("ProximityManager.deviceproximity(callback)");
        
        window.addEventListener('deviceproximity', callback); // Proximity API
    }
};
