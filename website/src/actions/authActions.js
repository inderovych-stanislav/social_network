import {authConstants} from "../constants/authConstants";

export const authActions = {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    registerRequest,
    registerSuccess,
    registerFailure
}

function loginRequest(user) {
    return {
        type: authConstants.LOGIN_REQUEST,
        user
    }
}

function loginSuccess(user) {
    return {
        type: authConstants.LOGIN_SUCCESS,
        user
    }
}

function loginFailure(error) {
    return {
        type: authConstants.LOGIN_FAILURE,
        error
    }
}

function logout() {
    return {
        type: authConstants.LOGOUT
    }
}

function registerRequest(user) {
    return {
        type: authConstants.REGISTER_REQUEST,
        user
    }
}

function registerSuccess(user) {
    return {
        type: authConstants.REGISTER_SUCCESS,
        user
    }
}

function registerFailure(error) {
    return {
        type: authConstants.REGISTER_FAILURE,
        error
    }
}