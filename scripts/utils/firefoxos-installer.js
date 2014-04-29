
var FirefoxOSInstaller = {
    /* 
     * init
     * Initialize the object
     */
    init: function(manifestUrl) {
        this.manifestUrl = manifestUrl;
    },
    /*
     * checkInstalled
     * Checks whether the app is installed
     * @returns {Boolean}
     */
    checkInstalled: function() {

        /* If the OS is Firefox OS */
        if (navigator.mozApps) {

            // check whether the app is installed
            try {
                var installCheck = navigator.mozApps.checkInstalled(this.manifestUrl);

                var _self = this;

                installCheck.onsuccess = function() {

                    /* If the app is already installed */
                    if (installCheck.result) {

                        return true;

                    }

                    return false;
                };
            }
            catch (e) {
//                console.log('error in checkInstalled');
            }
        }
    },
    /*
     * install
     * Install the app
     */
    install: function(e) {
        e.preventDefault();

        // Install the app
        var installation = navigator.mozApps.install(this.manifestUrl);

        // App is installed
        installation.onsuccess = function(data) {
            // do nothing
        };

        // App wasn't installed
        installation.onerror = function() {
            alert('installation error');
        };
    }
};