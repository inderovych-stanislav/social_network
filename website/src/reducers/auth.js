import {authConstants} from '../constants/authConstants';
import {authUser} from "../helpers/authUser";

const initialState = {
    isLoading: false,
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.getUser,
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
        case authConstants.REGISTER_REQUEST:
            return {
                isLoading: true,
                user: action.user,
                error: ''
            }
        case authConstants.REGISTER_SUCCESS:
            return {
                isLoading: false,
                user: action.user
            };
        case authConstants.REGISTER_FAILURE:
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