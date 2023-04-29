import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

const Chat = ({ route, navigation }) => {
    const { name, backgroundColor } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name});
    }, []);

    return (
        <View style={styles.container(backgroundColor)}>
            <Text>Hello Chat!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  container: (backgroundColor) => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
    };
  }
});

export default Chat;

