import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

const color_1 = "#090C08";
const color_2 = "#474056";
const color_3 = "#8A95A5";
const color_4 = "#B9C6AE";

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

// sign in user anonymously
  const signInUser = () => {
    signInAnonymously(auth)
    .then(result => {
      navigation.navigate("Chat", {
        userID: result.user.id,
        name: name,
        backgroundColor: color,
      });
      Alert.alert("Signed in Successfully!");
    })
    .catch((error) => {
      Alert.alert("Unable to sign in, try again later.")
    });
  };

  return (
    <>
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <View style={styles.appTitle}>
        <Text style={styles.appTitle}>Loopin</Text>
      </View>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
          textContentType="username"
        />
        <View style={styles.colorOptions}>
          <Text style={styles.colorText}>Choose Background Color:</Text>
          <View style={styles.circles}>
            <TouchableOpacity
              style={{
                backgroundColor: "#090C08",
                width: 42,
                height: 42,
                borderRadius: 50/2,
                borderWidth: 2,
                borderColor: "#757083"}}
              onPress={() => setColor(color_1)}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#474056",
                width: 42,
                height: 42,
                borderRadius: 50/2,
                borderWidth: 2,
                borderColor: "#757083" }}
              onPress={() => setColor(color_2)}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:  "#8A95A5",
                width: 42,
                height: 42,
                borderRadius: 50/2,
                borderWidth: 2,
                borderColor: "#757083" }}
              onPress={() => setColor(color_3)}
            >
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                  backgroundColor: "#B9C6AE",
                  width: 42,
                  height: 42,
                  borderRadius: 50/2,
                  borderWidth: 2,
                  borderColor: "#757083" }}
                onPress={() => setColor(color_4)}
              >
            </TouchableOpacity>
          </View>
          <Pressable>
            <Text
              style={styles.button}
              onPress={signInUser}
              // onPress={() =>navigation.navigate("Chat", { name: name, backgroundColor: color })}
            >
              Start Chatting
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
    {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    padding: 20,
    position: "absolute",
    backgroundColor: "#fff",
    width: "88%",
    minHeight: 290,
    bottom: 20,
  },
  appTitle: {
    position: "absolute",
    left: "25%",
    top: "15%",
    fontSize: 45,
    fontWeight: "600",
    color: "#fff",
  },
  textInput: {
    width: "100%",
    padding: 15,
    fontSize: 16,
    color: "rgba(117,113,131,.5)",
    fontWeight: "300",
    borderWidth: 1.5,
    marginBottom: 30,
    borderRadius: 3,
    borderColor: "#757083",
  },
  colorText: {
    fontSize: 16,
    fontWeight: 300,
    color: "#757083",
    alignSelf: "flex-start",
  },
  colorOptions: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  circles: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "flex-start",
  },
  button: {
    textAlign: "center",
    width: 300,
    padding: 15,
    backgroundColor: "#757083",
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    height: 50,
  },
});

export default Start;
