
function ChatViewController() {

    /* Initialize DOM Objects */
    var chat = document.querySelector('#chat');

}

ChatViewController.prototype = {
    /* 
     * sendMessage
     * Sends a message to the chat
     * @param {type} message
     * @returns {undefined}
     */
    sendMessage: function(message) {

        if (message && message !== '') {

            /* The user sends a message to the chat */
            chat.innerHTML = chat.innerHTML +
                    '<article class="you">' +
                    '<div class="avatar"><div class="you"><div class="face"></div><div class="body"></div></div></div>' +
                    '<div class="message">' +
                    '<div>' +
                    '<h2>You</h2>' +
                    '<p>' + message + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</article>';
        }

        // Scroll the chat to the bottom in order to make the message visible
        this.scrollDown();
    },
    /* 
     * receiveMessage
     * Receives a message from the chat
     * @param {type} message
     * @returns {undefined}
     */
    receiveMessage: function(message) {

        if (message && message !== '') {

            /* The user receives a message from the chat */
            chat.innerHTML = chat.innerHTML +
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

        // Scroll the chat to the bottom in order to make the message visible
        this.scrollDown();
    },
    /* 
     * scrollDown
     * Scrolls the chat to the bottom
     */
    scrollDown: function() {
        window.location = "#bottom";
    }
};
