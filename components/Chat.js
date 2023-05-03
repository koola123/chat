import { useState, useEffect } from "react";
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chat = ({ route, navigation, db, isConnected }) => {
  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);

  const loadCachedMessages = async () => {
    const cachedMessages = (await AsyncStorage.getItem("messages")) || [];
    setMessages(JSON.parse(cachedMessages));
  };

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  };

  let unsubMessages;

  useEffect(() => {
    if (isConnected === true) {
      navigation.setOptions({ title: name });
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
          cacheMessages(newMessages);
          setMessages(newMessages);
        });
      });
    } else loadCachedMessages();

    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, [isConnected]);

  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#8D33FF",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container(backgroundColor)}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (backgroundColor) => {
    return {
      flex: 1,
      backgroundColor: backgroundColor,
    };
  },
});

export default Chat;
