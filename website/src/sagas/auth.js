import {fork, all, takeEvery, put, call} from 'redux-saga/effects'
import {authActions} from "../actions/authActions";
import {authConstants} from "../constants/authConstants";
import {authService} from "../services/authService";
import {authUser} from "../helpers/authUser";

export function* login(action) {
    try {
        const response = yield call(authService.login, action.user.email, action.user.password);
        authUser.setToken(response.data.token)
        authUser.setUser(response.data.user)
        yield put(authActions.loginSuccess(response.data.user))
    } catch (error) {
        yield put(authActions.loginFailure(error.message));
    }
}

export function* register(action) {
    try {
        const response = yield call(authService.register, action.user);
        authUser.setToken(response.data.token)
        authUser.setUser(response.data.user)
        yield put(authActions.registerSuccess(response.data.user))
    } catch (error) {
        yield put(authActions.registerFailure(error.message));
    }
}

export function* watchLogin() {
    yield takeEvery(authConstants.LOGIN_REQUEST, login)
}

export function* watchLogout() {
    yield takeEvery(authConstants.LOGOUT, logout)
}

export function* watchRegister() {
    yield takeEvery(authConstants.REGISTER_REQUEST, register)
}

export default function* root() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchRegister)
    ])
}