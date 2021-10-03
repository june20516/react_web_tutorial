import {
    LOGIN_USER,
    SIGNUP_USER,
    AUTH_USER
} from '../_actions/types'

const user = function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }
        case SIGNUP_USER:
            return {...state, signupSuccess: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
        default:
            return state;
    }
}

export default user;