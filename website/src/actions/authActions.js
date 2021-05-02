import {authConstants} from "../constants/authConstants";

export const authActions = {
    loginRequest,
    loginSuccess,
    loginFailure
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