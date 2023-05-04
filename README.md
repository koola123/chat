# 📲 Chat App
Is a messenger app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location. Users can share self-taken photos with other users, upload photos from their photo gallery and communicate their location via Google Maps.

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

````
firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-authdomain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
});
````

Run the following next commands:
````
npx expo install <br/>
npx expo start
````
Last but not least: 
1) Install the Expo Go App from <b>Apple Store</b> or <b>Google Play Store</b> to test the project on your mobile device.<br/>
2) Install <b>[ ANDROID STUDIO ]</b> for Android Emulator or <b>[ XCODE ]</b> for ios Simulator to test the app.
