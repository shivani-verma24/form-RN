import axios from "axios";

//import axios from "axios";
// export const SET_USER_NAME = 'SET_USER_NAME';
// export const SET_NUM = 'SET_NUM';
// export const SET_EMAIL = 'SET_EMAIL';
// export const SET_ADDRESS = 'SET_ADDRESS';
// export const SET_BIO = 'SET_BIO';
// export const SET_COUNTRY = 'SET_COUNTRY';
// export const SET_CODE = 'SET_CODE';
// export const SET_URL = 'SET_URL';
// export const SET_PIC = 'SET_PIC';
// export const SET_SYMBOL = 'SET_SYMBOL';


// export const setName = username => dispatch => {
//     dispatch({
//         type: SET_USER_NAME,
//         payload: username
//     });
// };

// export const setNum = mobileNumber => dispatch => {
//     dispatch({
//         type: SET_NUM,
//         payload: mobileNumber
//     });
// };
// export const setEmail = email => dispatch => {
//     dispatch({
//         type: SET_EMAIL,
//         payload: email
//     });
// };
// export const setAddress = userAddress => dispatch => {
//     dispatch({
//         type: SET_ADDRESS,
//         payload: userAddress
//     });
// };

// export const setBio = bio => dispatch => {
//     dispatch({
//         type: SET_BIO,
//         payload: bio
//     });
// };
// export const setCountry = country => dispatch => {
//     dispatch({
//         type: SET_COUNTRY,
//         payload: country
//     });
// };
// export const setCode = countryCode => dispatch => {
//     dispatch({
//         type: SET_CODE,
//         payload: countryCode
//     });
// };
// export const setUrl = customUrl => dispatch => {
//     dispatch({
//         type: SET_URL,
//         payload: customUrl
//     });
// };
// export const setPic = profilePic => dispatch => {
//     dispatch({
//         type: SET_PIC,
//         payload: profilePic
//     });
// };
// export const setSymbol = countrySymbol => dispatch => {
//     dispatch({
//         type: SET_SYMBOL,
//         payload: countrySymbol
//     });
// };


const postFailure = () => {
    return {
        type: 'POST_FAILURE'
    }
}
const postSuccess = (data) => {
    return {
        type: 'POST_SUCCESS',
        data
    }
}

//returning a callback function of assynchronous type
export const postData = (data) => {
    return async (dispatchAction) => {
        try {
            let result = await axios.post('https://plugxrapi.brugu.io/dev/v1/addUser', data, {
                headers: {
                    "content-type": "application/json",
                    'apiKey': "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
                    'Authorization': "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
                },
            });
            console.log(result)
            dispatchAction(postSuccess(data))
        }
        catch (ex) {
            // console.log(ex)
            dispatchAction(postFailure())
        }
    }
}




