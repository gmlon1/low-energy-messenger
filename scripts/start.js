
/*
 * start.js
 * This javascript file initialize the objects needed by the XMAS Tales Web App.
 */

function start() {
    /* Add new objects to window */
// window.mFirefoxOSInstaller = new FirefoxOSInstaller("http://www.francesco.iovine.name/mdn/low-energy-messenger/public_html/manifest.webapp");
    window.mEnergyManager = new EnergyManager();
    ProximityManager.init();
    window.mBatteryStatusBarController = new BatteryStatusBarController();
    window.mActionBarController = new ActionBarController();
    window.mChatViewController = new ChatViewController();
    CallScreen.init();

    /* Check if Battery Status API is supported */
    if (window.mEnergyManager.isBatteryStatusAPISupported()) {

        /* Update the battery status bar when the battery status changes */
        window.mEnergyManager.handleChangeEvents(window.mBatteryStatusBarController.update);

        /* Update the battery status bar for the first time */
        window.mBatteryStatusBarController.update();

        /* Notify the user that the Battery Status API is supported */
        setTimeout(function() {
            window.mChatViewController.receiveMessage('Congratulations! This browser supports the Battery Status API: check the battery status bar above. Also, you won’t be able to take a photo if the battery of your device is low and not charging.', true);
        }, 3000);

    } else {

        /* Notify the user that the Battery Status API is not supported */
        setTimeout(function() {
            window.mChatViewController.receiveMessage('I\'m sorry: the Battery Status API is not supported on this browser.', true);
        }, 3000);
    }

    window.scrollTo(0, 1);

}

/* Start when the window is loaded */
window.onload = start;
