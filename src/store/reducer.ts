import {combineReducers} from 'redux';
import {homeReducer} from '../pages/Home/reducers';

const rootReducer = combineReducers({
    home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
