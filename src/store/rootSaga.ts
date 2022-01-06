import {all, call} from 'redux-saga/effects';
import {rootHomeSagas} from '../pages/Home/sagas';

export function* rootSaga() {
    try {
        yield all([call(rootHomeSagas)]);
    } catch (e) {
        console.error(e);
    }
}
