// import { SET_USER_NAME, SET_NUM, SET_EMAIL, SET_ADDRESS, SET_BIO, SET_COUNTRY, SET_CODE, SET_URL, SET_PIC, SET_SYMBOL }
//     from "./actions";

// const initialState = {
//     username: '',
//     mobileNumber: 0,
//     email: '',
//     userAddress: '',
//     bio: '',
//     country: '',
//     countryCode: '',
//     customUrl: '',
//     profilePic: '',
//     countrySymbol: ''
// }

// export const UserReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USER_NAME:
//             return { ...state, username: action.payload };
//         case SET_NUM:
//             return { ...state, mobileNumber: action.payload };
//         case SET_EMAIL:
//             return { ...state, email: action.payload };
//         case SET_ADDRESS:
//             return { ...state, userAddress: action.payload };
//         case SET_BIO:
//             return { ...state, bio: action.payload };
//         case SET_COUNTRY:
//             return { ...state, country: action.payload };
//         case SET_CODE:
//             return { ...state, countryCode: action.payload };
//         case SET_URL:
//             return { ...state, customUrl: action.payload };
//         case SET_PIC:
//             return { ...state, profilePic: action.payload };
//         case SET_SYMBOL:
//             return { ...state, countrySymbol: action.payload };
//         default:
//             return state
//     }
// }

const initialData = {
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
}
const initialState = {
    status: '',
    data: initialData,
    
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_SUCCESS':
            console.log('Fetching success')
            return { ...state, status: 'success', data: action.data }
        case 'FETCHING_FAILURE':
            console.log('Fetching failed')
            
            return { ...state, status: 'failure', data: initialData }

        default:
            return { ...state }
    }

};

