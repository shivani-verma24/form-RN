
import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable
} from 'react-native';

import { useDispatch } from 'react-redux';
import {postData} from './redux/actions'
//import { setName, setNum, setAddress, setBio, setEmail, setCountry, setCode, setUrl, setPic, setSymbol, postData } from './redux/actions'

export default function FormFile({ navigation }) {
    
    const dispatch = useDispatch();

    // function saveUser() {
    //     //console.log({username, mobileNumber})

    //     let data = { username, mobileNumber, userAddress, email, country, bio, countryCode, customUrl, countrySymbol, profilePic }
    //     fetch("https://plugxrapi.brugu.io/dev/v1/addUser", {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //         headers: {
    //             "content-type": "application/json",
    //             Accept: 'application.json',
    //             apiKey: "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
    //             Authorization:
    //                 "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
    //         },
            
    //     })
    //         .then((result) => {
    //             console.log(result);
    //             // result.json().then((response) => {
    //             //     console.warn(response)
    //             // })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //           });
    // }

   

    // const onPressHandler = () => {
    //     navigation.navigate('Info')
    // }
    const [data, setData] = useState({
        chainId: 4,
        username: '',
        mobileNumber: 0,
        email: '',
        customUrl: '',
        userAddress: '',
        bio: '',
        profilePic: '',
        country: '',
        countrySymbol: '',
        countryCode: ''
    });

    return (
        <ScrollView>
            <View style={styles.body}>
                <Text style={styles.text}>Form: </Text>

                <TextInput style={styles.textInput}
                    placeholder='Username'
                    onChangeText={(value) => { setData({ ...data, username: value })} }
                />


                <TextInput style={styles.textInput}
                    placeholder='Mobile Number'
                    onChangeText={(value) => { setData({ ...data, mobileNumber: value })}}
                    maxLength={10}
                    keyboardType='numeric'
                />

                <TextInput style={styles.textInput}
                    placeholder='Email'
                    onChangeText={(value) => { setData({ ...data, email: value })}}
                />

                <TextInput style={styles.textInput}
                    placeholder='Address'
                    onChangeText={(value) => { setData({ ...data, userAddress: value })}}
                    multiline
                />

                <TextInput style={styles.textInput}
                    placeholder='Bio'
                    onChangeText={(value) => { setData({ ...data, bio: value })}}
                    multiline
                />

                <TextInput style={styles.textInput}
                    placeholder='Country'
                    onChangeText={(value) => { setData({ ...data, country: value })}}
                />

                <TextInput style={styles.textInput}
                    placeholder='Country Code'
                    onChangeText={(value) => { setData({ ...data, countryCode: value })}}
                />
                <TextInput style={styles.textInput}
                    placeholder='Custom Url'
                    onChangeText={(value) => { setData({ ...data, customUrl: value })}}
                />
                <TextInput style={styles.textInput}
                    placeholder='Profile Pic'
                    onChangeText={(value) => { setData({ ...data, profilePic: value })}}
                />
                <TextInput style={styles.textInput}
                    placeholder='Country Symbol'
                    onChangeText={(value) => { setData({ ...data, countrySymbol: value })}}
                />

                <Pressable
                    // onPress={onPressHandler}
                    onPress={() => { dispatch(postData(data)) }}
                    style={({ pressed }) => ({ backgroundColor: pressed ? '#800080' : '#ff7f50' })}
                >
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
            </View>



        </ScrollView>

    );
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: '#000000'
    },
    textInput: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        margin: 10
    }
});

