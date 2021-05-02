import {authConstants} from '../constants/authConstants';

const initialState = {
    isLoading: false,
    isAuthenticated: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    error: ''
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                isLoading: true,
                user: action.user,
                error: ''
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                isLoading: false,
                user: action.user
            };
        case authConstants.LOGIN_FAILURE:
            return {
                isLoading: false,
                error: action.error
            };
        case authConstants.LOGOUT:
            return {
                user: {}
            };
        default:
            return state
    }
}

export default auth;