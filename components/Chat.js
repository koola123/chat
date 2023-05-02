import { useState, useEffect } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      })
      setMessages(newMessages);
    })
    return () => {
      if (unsubMessages) unsubMessages();
    }
   }, []);
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello developer",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    //   {
    //     _id: 2,
    //     text: `${name} has entered the chat`,
    //     createdAt: new Date(),
    //     system: true,
    //   },
    // ]);
  // }, [`${messages}`]);


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
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name: name
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
