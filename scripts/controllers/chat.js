
var Chat = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {
        /* Initialize DOM Objects */
        this.chatScreen = document.querySelector('#chatscreen');
        this.chatBox = document.querySelector('#chatscreen #chat');
        this.nav = document.querySelector('#chatscreen nav');
    },
    /* 
     * sendMessage
     * Sends a message to the chat
     * @param {type} message
     * @returns {undefined}
     */
    sendMessage: function(message, noScroll) {

        if (message && message !== '') {

            /* The user sends a message to the chat */
            this.chatBox.innerHTML = this.chatBox.innerHTML +
                    '<article class="you">' +
                    '<div class="avatar"><div class="face"></div><div class="body"></div></div>' +
                    '<div class="message">' +
                    '<div>' +
                    '<h2>You</h2>' +
                    '<p>' + message + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</article>';
        }

        if (noScroll) {
            // do nothing
        }
        else {
            // Scroll the page to the bottom in order to make the message visible
            App.scrollDown();
        }
    },
    /* 
     * receiveMessage
     * Receives a message from the chat
     * @param {type} message
     * @returns {undefined}
     */
    receiveMessage: function(message, noScroll) {

        if (message && message !== '') {

            /* The user receives a message from the chat */
            this.chatBox.innerHTML = this.chatBox.innerHTML +
                    '<article>' +
                    '<div class="avatar"><img alt="franciov" src="img/franciov.png" /></div>' +
                    '<div class="message">' +
                    '<div>' +
                    '<h2>Franciov</h2>' +
                    '<p>' + message + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</article>';
        }

        if (noScroll) {
            // do nothing
        }
        else {
            // Scroll the page to the bottom in order to make the message visible
            App.scrollDown();
        }
    },
    /* 
     * scrollDown
     * Scrolls the chat to the bottom
     */
    scrollDown: function() {
        window.location = "#bottom";
    },
    /* 
     * show
     * Show the chat screen
     */
    show: function() {
        App.clearPages();
        this.chatScreen.style.display = 'block';
    }
};
