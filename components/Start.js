import { StyleSheet, View, Text, TextInput, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Start = ({ navigation }) => {

    const [ name, setName ] = useState('');
    const [ color, setColor ] = useState({
        black: {backgroundColor: '#090C08'},
        gray: {backgroundColor: '#474056'},
        blue: {backgroundColor: '#8A95A5'},
        green: {backgroundColor: '#B9C6AE'}
    });

     return (
        <View style={styles.container}>
            <ImageBackground 
            source={require('../assets/backgroundImage.png')}
            resizeMode="cover"
            style={{width: "100%", height: "100%"}}
            />
            <View style={styles.appTitle}>
            <Text style={styles.appTitle}>Loopin</Text>
            </View>
            <View style={styles.container2}>
            <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
            />
            <View style={styles.colorOptions}>
            <Text style={styles.colorText}>Choose Background Color:</Text>
            <View style={styles.circles}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {name: name}, {color: color})}>
                <View style={{backgroundColor: '#090C08', width: 42, height: 42, borderRadius: 42/2 }}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {name: name}, {color: color})}>
                <View style={{backgroundColor: '#474056', width: 42, height: 42, borderRadius: 42/2 }}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {name: name}, {color: color})}>
                <View style={{backgroundColor: '#8A95A5', width: 42, height: 42, borderRadius: 42/2 }}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {name: name}, {color: color})}>
                <View style={{backgroundColor: '#B9C6AE', width: 42, height: 42, borderRadius: 42/2 }}></View>
            </TouchableOpacity>
          
            </View>
            <Pressable>
            <Text style={styles.button}
                onPress={() => navigation.navigate('Chat', { name: name, color: color} )}>
                Start Chatting 
            </Text>
            </Pressable>
            </View>
    
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        padding: 20,
        position: 'absolute',
        backgroundColor: '#fff',
        width: '88%',
        height: '44%',
        bottom: 20
    },
    appTitle: {
        position: 'absolute',
        left: '25%',
        top: '15%',
        fontSize: 45,
        fontWeight: '600',
        color: '#fff'
    },
    textInput: {
        width: '100%',
        padding: 15,
        fontSize: 16,
        color: 'rgba(117,113,131,.5)',
        fontWeight: '300',
        borderWidth: 1.5,
        marginBottom: 30,
        borderRadius: 3,
        borderColor: '#757083'
    },
    colorText: {
        fontSize: 16, 
        fontWeight: 300, 
        color: '#757083',
        alignSelf: 'flex-start'
    },
    colorOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    circles: {
        flexDirection: 'row',
        gap: 20,
        alignSelf: 'flex-start'
    },
    button: {
        textAlign: 'center',
        width: 300,
        padding: 15,
        backgroundColor: '#757083',
        fontSize: 16,
        fontWeight: 600,
        color: '#fff',
        height: 50
    }
});

export default Start;

