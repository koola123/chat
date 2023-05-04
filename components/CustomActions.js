import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const CustomActions = () => {

    const onActionPress = () => {}

    return (
        <View>
            <TouchableOpacity>
                <Text 
                style={styles.actionButton} 
                onPress={onActionPress}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: 'coral',
        color: '#fff',
        width: 20,
        height: 20,
        fontWeight: '600',
        marginBottom: 11,
        marginLeft: 10,
        paddingLeft: 6.5,
        borderRadius: 50/2,
    }
})

export default CustomActions;