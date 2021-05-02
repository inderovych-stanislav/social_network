import {fork, all, takeEvery, put, call} from 'redux-saga/effects'
import {authActions} from "../actions/authActions";
import {authConstants} from "../constants/authConstants";
import {authService} from "../services/authService";

export function* login(action) {
    try {
        const response = yield call(authService.login, action.user.username, action.user.password);
        yield put(authActions.loginSuccess(response.user))
    } catch (error) {
        yield put(authActions.loginFailure(error.message));
    }
}

export function* watchLogin() {
    yield takeEvery(authConstants.LOGIN_REQUEST, login)
}

export default function* root() {
    yield all([
        fork(watchLogin),
    ])
}