
/*
 * install.js
 * This javascript file contains the code to install Low Energy Messenger as a Firefox OS App.
 */

// get a reference to the button
var installButton = document.getElementById('install');


function install(ev) {
    ev.preventDefault();

    // Define the manifest URL
    var manifest_url = "http://www.francesco.iovine.name/mdn/low-energy-messenger/public_html/manifest.webapp";

    // Install the app
    var installLocFind = navigator.mozApps.install(manifest_url);

    // App is installed
    installLocFind.onsuccess = function(data) {
        // hide the install button
        installButton.style.display = "none";
        
        // relies on system notifications
    };

    // App wasn't installed
    installLocFind.onerror = function() {
        // relies on system notifications
    };
}

/* If the OS id Firefox OS */
if (navigator.mozApps) {

    // check whether the app is installed
    var installCheck = navigator.mozApps.checkInstalled("http://www.francesco.iovine.name/mdn/low-energy-messenger/public_html/manifest.webapp");

    installCheck.onsuccess = function() {

        /* If the app is already installed */
        if (installCheck.result) {

            // hide the install button
            installButton.style.display = "none";

        } else { /* If not */

            // show the install button
            installButton.style.display = "block";

            // install the app when the user clicks on the install button
            installButton.addEventListener('click', install, false);

        }
    };
}
