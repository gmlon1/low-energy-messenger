
var EnergyManager = {
    /* 
     * init
     * Initialize Object Literal
     */
    init: function() {
        /* Initialize che battery object */
        navigator.battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
    },
    /*
     * isBatteryStatusAPISupported
     * Checks whether the Battery Status API is supported by the browser
     * @returns {Boolean}
     */
    isBatteryStatusAPISupported: function() {

        if (navigator.battery) {
            return true;
        }

        return false;
    },
    /*
     * log
     * Writes logs into the console
     * @param {type} event
     * @returns {undefined}
     */
    log: function(event) {
        if (event) {
            console.warn(event);
        }

        console.log('battery.level: ' + navigator.battery.level);
        console.log('battery.charging: ' + navigator.battery.charging);
        console.log('battery.chargingTime: ' + navigator.battery.chargingTime);
        console.log('battery.dischargingTime: ' + navigator.battery.dischargingTime);

    },
    /*
     * getBatteryPercentage
     * Gets the battery level and calculates the percentage
     * @returns {an Integer between 0 and 100}
     */
    getBatteryPercentage: function() {
        var percentage = Math.round(navigator.battery.level * 100);
        return percentage;
    },
    /*
     * isBatteryFullyCharged
     * Checks whether the battery is fully charged
     * @returns {Boolean}
     */
    isBatteryFullyCharged: function() {
        if (navigator.battery.level === 1) {
            return true;
        }
        return false;
    },
    /*
     * isBatteryCharging
     * Checks whether the battery is charging
     * @returns {Boolean}
     */
    isBatteryCharging: function() {

        // the battery cannot be charging because is completely charged
        if (navigator.battery.level === 1) {
            return false;
        }

        return navigator.battery.charging;
    },
    /*
     * getBatteryChargingTime
     * Gets the battery charging time in seconds and converts it to a string
     * @returns {a String containing a formatted time if available, undefined otherwise}
     */
    getBatteryChargingTime: function() {
        if (navigator.battery.chargingTime === Infinity
                || navigator.battery.chargingTime === 0) {
            return undefined;
        }
        var time = StringUtils.getHumanReadableTime(navigator.battery.chargingTime);
        return time;
    },
    /*
     * getBatteryDischargingTime
     * Gets the battery discharging time in seconds and converts it to a string
     * @returns {a String containing a formatted time, undefined otherwise}
     */
    getBatteryDischargingTime: function() {
        if (navigator.battery.dischargingTime === Infinity
                || navigator.battery.dischargingTime === 0) {
            return undefined;
        }
        var time = StringUtils.getHumanReadableTime(navigator.battery.dischargingTime);
        return time;
    },
    /*
     * handleChangeEvents
     * Registers an handler to every *-change events of navigator.battery
     * @param {function} handler
     * @returns {undefined}
     */
    handleChangeEvents: function(handler) {

        /* Update the battery status bar on battery level change */
        navigator.battery.onlevelchange = function(e) {
            handler(e);
        };

        /* Update the battery status bar on battery charging change */
        navigator.battery.onchargingchange = function(e) {
            handler(e);
        };

        /* Update the battery status bar on battery charging time change */
        navigator.battery.onchargingtimechange = function(e) {
            handler(e);
        };

        /* Update the battery status bar on battery discharging time change */
        navigator.battery.ondischargingtimechange = function(e) {
            handler(e);
        };
    }
};
