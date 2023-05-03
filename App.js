import { useEffect } from "react";
// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Create the navigator
const Stack = createNativeStackNavigator();
// Initializing a connection to firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
import { useNetInfo } from "@react-native-community/netinfo";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyARH7EdXbhZHQu3vsekUHFe_Uud8y4rbcM",
    authDomain: "chat-chat-b2956.firebaseapp.com",
    projectId: "chat-chat-b2956",
    storageBucket: "chat-chat-b2956.appspot.com",
    messagingSenderId: "176055049259",
    appId: "1:176055049259:web:98ec865a7570b100149e6e",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app); // When using this in other components, you can read from, and write into, your database via your app.

  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
