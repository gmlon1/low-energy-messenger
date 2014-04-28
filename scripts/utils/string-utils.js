
var StringUtils = {
    /* 
     * getHumanReadableTime 
     * This utility function takes the number of seconds
     * and returns a string with the time in hours and minutes 
     * @param {Integer} seconds
     * @returns {String} a human readable string representation of time
     */
    getHumanReadableTime: function(seconds) {
        var humanReadableTime = seconds + 's';

        var hours = parseInt(seconds / 3600);
        var minutes = parseInt(((seconds / 3600) - hours) * 60);
        var humanReadableTime = hours;
        humanReadableTime += ':';
        if (minutes < 10) {
            humanReadableTime += '0';
        }
        humanReadableTime += minutes;

        return humanReadableTime;
    }

};

