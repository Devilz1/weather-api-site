import {call, takeEvery} from 'redux-saga/effects';

export function* setConsole() {
    yield call([console, 'log'], 'SET TITLE!!!');
}

export function* rootHomeSagas() {
    yield takeEvery('SET_TITLE', setConsole);
}
