// import React from 'react';

// import {
//     Pressable,
//     StyleSheet,
//     Text,
//     View,

// } from 'react-native';

// import { useSelector } from 'react-redux';

// export default function ScreenB({ navigation }) {

//     //const { name } = route.params;     // to get data from screen A
//     const { username, mobileNumber, userAddress, email, country, bio, countryCode, customUrl, countrySymbol,profilePic } = useSelector(state => state.UserReducer);
//     //const result = useSelector(x=> x);


//     const onPressHandler = () => {
//         navigation.navigate('Form')
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={styles.title}>Details</Text>

//             <Text style={styles.text}>Name: {username}</Text>
//             <Text style={styles.text}>Mobile Number: {mobileNumber} </Text>
//             <Text style={styles.text}>Email: {email} </Text>
//             <Text style={styles.text}>Address: {userAddress}</Text>
//             <Text style={styles.text}>Bio: {bio}</Text>
//             <Text style={styles.text}>Country: {country} </Text>
//             <Text style={styles.text}>Code: {countryCode}</Text>
//             <Text style={styles.text}>{customUrl}</Text>
//             <Text style={styles.text}>{profilePic}</Text>
//             <Text style={styles.text}>{countrySymbol}</Text>

//             <Pressable
//                 onPress={onPressHandler}
//                 android_ripple={{ color: '#00f' }}
//                 style={({ pressed }) => ({ backgroundColor: pressed ? '#800080' : '#ff7f50' })}
//             >
//                 <Text style={styles.text}>Go back</Text>
//             </Pressable>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 20,
//         margin: 10,
//         color: '#000000'
//     },
//     title: {
//         fontSize: 40,
//         margin: 10,
//         fontWeight: 'bold',
//         color: '#000000'
//     },
//     button: {
//         height: 50,
//         width: 150,
//         backgroundColor: '#00ff00',
//         alignItems: 'center',
//         margin: 10
//     }
// });
