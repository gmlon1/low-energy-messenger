# Low Energy Messenger

Low Energy Messenger is an instant messaging Web App (also for Firefox OS) that pays very high attention to battery status.

![Screenshot](https://raw.github.com/franciov/low-energy-messenger/master/img/screenshots/firefoxos-simulator.png)

The demo is published [here](http://www.francesco.iovine.name/mdn/low-energy-messenger/public_html/) ([short link](http://goo.gl/87QanF))

## Notes

It has originally been developed for [this MDN page](https://developer.mozilla.org/en-US/Apps/Developing/gather_and_modify_data/retrieving_battery_status_information) that looks at one way to manage energy consumption: The Battery Status API.

Low Energy Messenger has the following features:

- A battery status bar, containing battery status information
- A chat section, containing all the messages received or sent
- An action bar, containing a text field, a button to send a message, a button to take a photo and a button to install the app on Firefox OS

The app doesn’t allow users to take photos when the battery level is low or the device is not charging. It has been made using HTML + CSS + Javascript, with no libs and using static data, so no web services on Internet, but real integration with the Battery Status API and a realistic look & feel.

## Contributing

- include real messenger functionality, using WebRTC or Web Sockets
- FirefoxOSInstaller
- better look&feel
- add tests
- open github issues

