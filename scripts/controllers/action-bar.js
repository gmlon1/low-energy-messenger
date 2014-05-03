
var ActionBar = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {
        /* Initialize DOM Objects */
        this.takePhotoButton = document.querySelector('#take-photo');
        this.sendMessageButton = document.querySelector('#send-message');
        this.textMessageField = document.querySelector('#text-message');
        this.callButton = document.querySelector('#call-button');
        this.installButton = document.querySelector('#install');

        /* Call takePhoto() when the takePhoto button is clicked */
        this.takePhotoButton.onclick = this.takePhoto;

        /* Call send() When the send button is clicked */
        this.sendMessageButton.onclick = this.send;

        /* Call call() When the call button is clicked */
        this.callButton.onclick = this.call;

        /* Checks whether the app is installed 
         var checkInstalled = FirefoxOSInstaller.checkInstalled();
         if (checkInstalled === true) {
         // hide the install button
         this.installButton.style.display = "none";
         }
         else if (checkInstalled === false) {
         // show the install button
         this.installButton.style.display = "block";
         
         // install the app when the user clicks on the install button
         this.installButton.onclick = FirefoxOSInstaller.install;
         }
         */
    },
    /* 
     * send
     * Handles the send button
     * @returns {undefined}
     */
    send: function() {

        this.textMessageField = document.querySelector('#text-message');

        if (this.textMessageField.value !== '') {

            /* Show the chat page */
            Chat.show();

            // send the text contained in the input field
            Chat.sendMessage(this.textMessageField.value);

            // receive a fake message in response
            Chat.receiveMessage('Well done! ;)');

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
        if (EnergyManager.isBatteryStatusAPISupported()) {

            /* Show the chat page */
            Chat.show();

            /* Initialize a static img tag */
            var photo = '<img alt="photo" src="img/photo.png" />';

            /* Check if the battery status */
            if (EnergyManager.getBatteryPercentage() > 30 // not low
                    || EnergyManager.isBatteryCharging() // charging
                    || EnergyManager.isBatteryFullyCharged() // fully charged
                    ) {

                // send the photo
                Chat.sendMessage(photo);

                // receive a fake message
                Chat.receiveMessage('Nice shot! :)');
            }
            else {
                /* Notify the user that the photo could not been taken because the battery level is low */
                Chat.receiveMessage('You couldn\'t take the photo because the battery of your device is low and not charging.');
            }

            // Scroll the page to the bottom in order to make the message visible
            App.scrollDown();
        }
        else { /* If Battery Status API is not supported */
            /* receive an error message */
            Chat.receiveMessage('I\'m sorry: the Battery Status API is not supported on this browser. Try Firefox! ;)');
        }
    },
    call: function() {
        CallScreen.call();
    }
};
