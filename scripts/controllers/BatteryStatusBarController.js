
function BatteryStatusBarController() {

    /* Initialize DOM Objects */
    this.batteryStatusBar = document.querySelector('#battery-status-bar');
    this.batteryLevelDomObj = document.querySelector('#battery-status-bar .level');
    this.batteryPercentageDomObj = document.querySelector('#battery-status-bar .percentage');
    this.batteryTimeDomObj = document.querySelector('#battery-status-bar .time');

}


BatteryStatusBarController.prototype = {
    /* 
     * updateBatteryStatus 
     * Updates the battery status bar.
     * @param {type} event
     * @returns {undefined}
     */
    update: function(event) {

        /* Initialize DOM Objects */
        BatteryStatusBarController();

        /* Logs */
        window.mEnergyManager.log(event);

        /* Level */
        var percentage = window.mEnergyManager.getBatteryPercentage();
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

        if (window.mEnergyManager.isBatteryFullyCharged()) { // battery fully charged
            chargingStatusAndTime = 'fully charged';
        }
        else if (window.mEnergyManager.isBatteryCharging()) { // battery charging

            chargingStatusAndTime = 'Charging: ';

            if (window.mEnergyManager.getBatteryChargingTime()) {
                chargingStatusAndTime += window.mEnergyManager.getBatteryChargingTime();
                chargingStatusAndTime += ' until full';
            }
            else { // charging time unknown
                chargingStatusAndTime += 'calculating time until full ...';
            }

        }
        else { // battery discharging

            chargingStatusAndTime = 'Discharging: ';

            if (window.mEnergyManager.getBatteryDischargingTime()) {
                chargingStatusAndTime += window.mEnergyManager.getBatteryDischargingTime();
                chargingStatusAndTime += ' remaining';
            }
            else { // discharging time unknown
                chargingStatusAndTime += ': ';
                chargingStatusAndTime += 'calculating time remaining ...';
            }
        }

        this.batteryTimeDomObj.innerHTML = chargingStatusAndTime;

        /* Show the battery status bar */
        this.batteryStatusBar.style.display = 'block';
    }
};
