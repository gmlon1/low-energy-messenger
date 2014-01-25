
function ActionBarController() {

    /* Initialize DOM Objects */
    this.takePhotoButton = document.querySelector('#take-photo');
    this.sendMessageButton = document.querySelector('#send-message');
    this.textMessageField = document.querySelector('#text-message');
    this.installButton = document.querySelector('#install');

    /* Call takePhoto() when the takePhoto button is clicked */
    this.takePhotoButton.onclick = this.takePhoto;

    /* Call send() When the send button is clicked */
    this.sendMessageButton.onclick = this.send;

    /* Checks whether the app is installed 
    var checkInstalled = window.mFirefoxOSInstaller.checkInstalled();
    if (checkInstalled === true) {
        // hide the install button
        this.installButton.style.display = "none";
    }
    else if (checkInstalled === false) {
        // show the install button
        this.installButton.style.display = "block";

        // install the app when the user clicks on the install button
        this.installButton.onclick = window.mFirefoxOSInstaller.install;
    }
    */
}


ActionBarController.prototype = {
    /* 
     * send
     * Handles the send button
     * @returns {undefined}
     */
    send: function() {

        this.textMessageField = document.querySelector('#text-message');

        if (this.textMessageField.value !== '') {
            // send the text contained in the input field
            window.mChatViewController.sendMessage(this.textMessageField.value);

            // receive a fake message in response
            window.mChatViewController.receiveMessage('Well done! ;)');

            // clear the input field
            this.textMessageField.value = '';
        }
    },
    /* 
     * takePhoto 
     * Handles the take-photo button
     * @returns {undefined}
     */
    takePhoto: function() {

        /* Check if Battery Status API is supported */
        if (window.mEnergyManager.isBatteryStatusAPISupported()) {

            /* Initialize a static img tag */
            var photo = '<img alt="photo" src="img/photo.png" />';

            /* Check if the battery status */
            if (window.mEnergyManager.getBatteryPercentage() > 30 // not low
                    || window.mEnergyManager.isBatteryCharging() // charging
                    || window.mEnergyManager.isBatteryFullyCharged() // fully charged
                    ) {

                // send the photo
                window.mChatViewController.sendMessage(photo);

                // receive a fake message
                window.mChatViewController.receiveMessage('Nice shot! :)');
            }
            else {
                /* Notify the user that the photo could not been taken because the battery level is low */
                window.mChatViewController.receiveMessage('You couldn\'t take the photo because the battery of your device is low and not charging.');
            }

            // Scroll the chat to the bottom in order to make the message visible
            window.mChatViewController.scrollDown();
        }
        else { /* If Battery Status API is not supported */
            /* receive an error message */
            window.mChatViewController.receiveMessage('I\'m sorry: the Battery Status API is not supported on this browser. Try Firefox! ;)');
        }
    }
};
