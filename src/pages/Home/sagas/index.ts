import {call, takeEvery} from 'redux-saga/effects';

export function* setConsole() {
    yield call([console, 'log'], 'SET TITLE!!!');
}

export function* setConsoleDescription() {
    yield call([console, 'log'], 'SET DESCRIPTION!!!');
}

export function* rootHomeSagas() {
    yield takeEvery('SET_TITLE', setConsole);
    yield takeEvery('SET_DESCRIPTION', setConsoleDescription);
}
