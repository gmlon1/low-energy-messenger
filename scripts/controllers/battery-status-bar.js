
var BatteryStatusBar = {
    /* 
     * init
     * Initialize Object Literal
     */
    init: function() {
        /* Initialize DOM Objects */
        this.batteryStatusBar = document.querySelector('#battery-status-bar');
        this.batteryLevelDomObj = document.querySelector('#battery-status-bar .level');
        this.batteryPercentageDomObj = document.querySelector('#battery-status-bar .percentage');
        this.batteryTimeDomObj = document.querySelector('#battery-status-bar .time');
    },
    /* 
     * updateBatteryStatus 
     * Updates the battery status bar.
     * @param {type} event
     * @returns {undefined}
     */
    update: function(event) {

        /* Initialize DOM Objects */
        BatteryStatusBar.init();

        /* Logs */
        EnergyManager.log(event);

        /* Level */
        var percentage = EnergyManager.getBatteryPercentage();
        this.batteryLevelDomObj.style.right = (100 - percentage) + '%';
        this.batteryPercentageDomObj.innerHTML = percentage + '%';

        /* Color */
        if (percentage < 20) {
            this.batteryLevelDomObj.setAttribute('class', 'low level');
        }
        else if (percentage < 60) {
            this.batteryLevelDomObj.setAttribute('class', 'medium level');
        }
        else {
            this.batteryLevelDomObj.setAttribute('class', 'high level');
        }

        /* Charging status and time */
        var chargingStatusAndTime = '';

        if (EnergyManager.isBatteryFullyCharged()) { // battery fully charged
            chargingStatusAndTime = 'fully charged';
        }
        else if (EnergyManager.isBatteryCharging()) { // battery charging

            var batteryChargingTime = EnergyManager.getBatteryChargingTime();

            chargingStatusAndTime = 'Charging: ';

            if (batteryChargingTime) {
                chargingStatusAndTime += batteryChargingTime;
                chargingStatusAndTime += ' until full';
            }
            else { // charging time unknown
                chargingStatusAndTime += 'calculating time until full ...';
            }

        }
        else { // battery discharging

            var batteryDischargingTime = EnergyManager.getBatteryDischargingTime();

            chargingStatusAndTime = 'Discharging: ';

            if (batteryDischargingTime) {
                chargingStatusAndTime += batteryDischargingTime;
                chargingStatusAndTime += ' remaining';
            }
            else { // discharging time unknown
                chargingStatusAndTime += 'calculating time remaining ...';
            }
        }

        this.batteryTimeDomObj.innerHTML = chargingStatusAndTime;

        /* Show the battery status bar */
        this.batteryStatusBar.style.display = 'block';
    }
};
