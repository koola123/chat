# Chat App 📲
A chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.

## Application features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat provides users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

## Tech stack
☑️ React Native
☑️ Expo
☑️ Google Firestore Database
☑️ Google Firebase Authentication
☑️ React Native Gifted Chat

## How to use it
### Prerequisites
Install nodejs LTS version.
Setting up your database
- Sign in at Google Firebase
- Create a new project in test mode
- In there create a Firestore Database
- At 'Settings' -> 'General' -> 'Your apps' -> 'Firestore for Web' generate your configuration object.

## Installation
Clone the repository:
````
git clone https://github.com/koola123/chat.git
cd chat

`````
In the App.js file replace the firebaseConfig variable with the configuration info from your own Firestore database:

Then run the following next commands:

````
npx expo install
npx expo start
````
-> Install the Expo Go App from <b>Apple Store</b> or <b>Google Play Store</b> to test the project on your mobile device.<br/>
-> Install <b>"Android Studio"</b> for Android Emulator or <b>"Xcode"</b> for ios Simulator to test the app.
