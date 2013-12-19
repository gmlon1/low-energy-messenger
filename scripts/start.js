
/*
 * start.js
 * This javascript file initialize the objects needed by the XMAS Tales Web App.
 */

/* Add new objects to window */
window.mEnergyManager = new EnergyManager();
window.mBatteryStatusBarController = new BatteryStatusBarController();
window.mActionBarController = new ActionBarController();
window.mChatViewController = new ChatViewController();

/* When the window is loaded */
window.onload = function() {

    /* Check if Battery Status API is supported */
    if (window.mEnergyManager.isBatteryStatusAPISupported()) {

        /* Update the battery status bar when the battery status changes */
        window.mEnergyManager.handleChangeEvents(window.mBatteryStatusBarController.update);
                
        /* Update the battery status bar for the first time */
        window.mBatteryStatusBarController.update();

        /* Notify the user that the Battery Status API is supported */
        window.mChatViewController.receiveMessage('Congratulations! This browser supports the Battery Status API: check the battery status bar above. Also, you won’t be able to take a photo if the battery of your device is low and not charging.');

    } else {

        /* Notify the user that the Battery Status API is not supported */
        window.mChatViewController.receiveMessage('I\'m sorry: the Battery Status API is not supported on this browser.');
    }
};
