
var App = {
    /* 
     * init
     * Initialize the app
     */
    init: function() {
        this.pages = document.querySelectorAll('#mainscreen > section');

        EnergyManager.init();
        ProximityManager.init();
        BatteryStatusBar.init();
        ActionBar.init();
        Chat.init();
        CallScreen.init();
        // FirefoxOSInstaller.init("http://www.francesco.iovine.name/mdn/low-energy-messenger/public_html/manifest.webapp");

        /* Check if Battery Status API is supported */
        if (EnergyManager.isBatteryStatusAPISupported()) {

            /* Update the battery status bar when the battery status changes */
            EnergyManager.handleChangeEvents(BatteryStatusBar.update);

            /* Update the battery status bar for the first time */
            BatteryStatusBar.update();

            /* Notify the user that the Battery Status API is supported */
            setTimeout(function() {
                Chat.receiveMessage('Congratulations! This browser supports the Battery Status API: check the battery status bar above. Also, you won’t be able to take a photo if the battery of your device is low and not charging.', true);
            }, 3000);

        } else {

            /* Notify the user that the Battery Status API is not supported */
            setTimeout(function() {
                Chat.receiveMessage('I\'m sorry: the Battery Status API is not supported on this browser.', true);
            }, 3000);
        }

        window.scrollTo(0, 1);
    },
    clearPages: function() {
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            page.style.display = 'none';
        }
    },
    /* 
     * scrollDown
     * Scrolls the page to the bottom
     */
    scrollDown: function() {
        console.log('scrolling down...');
        window.location = "#bottom";
    },
    /* 
     * scrollDown
     * Scrolls the page to the top
     */
    scrollTop: function() {
        window.location = "#top";
    }
};