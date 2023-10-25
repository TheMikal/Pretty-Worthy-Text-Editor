
# Pretty Worthy Text Editor

## Description 

This web application is a text editor designed to meet the specified criteria. It features a client-server folder structure, uses Webpack to bundle JavaScript files, employs IndexedDB for content storage, has a service worker for offline functionality, and can be deployed to Heroku with ease.

## Usage

### Clone the Repository:

```
git clone https://github.com/your-username/text-editor-app.git
```
- Then open the path to your app and install dependencies
```
cd text-editor-app
npm install
```
- To start the application, in the same gitbash terminal as before type:
```
npm run start
```
Open the Application in a Web Browser:

- Once you start the application, it will open in your default web browser.

### Using the Text Editor:

- Upon opening the text editor, IndexedDB will immediately create a database for content storage.
- Enter your content in the text editor, and it will be automatically saved by IndexedDB when you click off the DOM window.
- Even after closing the text editor, your content will be retrieved from IndexedDB when you reopen it.

### Offline Functionality:

- Click on the "Install" button to download the web application as an icon on your desktop.
- The web application utilizes a registered service worker using Workbox, allowing you to use the text editor offline.
- Your static assets are pre-cached when you load the application and continue to work even without an internet connection.


Enjoy using your text editor web application!

## Screenshots/Links

[JATE: Just Another Text Editor](https://pretty-worthy-text-editor-6541da9fde14.herokuapp.com)

#### An image of the editor
![textEditor](https://github.com/TheMikal/Pretty-Worthy-Text-Editor/assets/131578548/506c2d27-c717-492e-9e82-5aad63c81fe3)

## Contributing

Contributions are always welcome!

If you wish to contribute, fork the repo and create a pull request ♥.

