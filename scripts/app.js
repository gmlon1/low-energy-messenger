
var LowEnergyMessenger = {
    pages: document.querySelectorAll('#mainscreen > section'),
    init: function() {

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