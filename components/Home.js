import React from 'react';

import {
    Pressable,
    StyleSheet,
    Text,
    View,

} from 'react-native';


export default function Home({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Form')

    }

    return (
        <View style={styles.body}>
            <Pressable
                onPress={onPressHandler}
                android_ripple={{ color: '#00f' }}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#800080' : '#ff7f50' })}
            >
                <Text style={styles.text}>Register</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        margin: 10,
        color: '#000000'
    }
});