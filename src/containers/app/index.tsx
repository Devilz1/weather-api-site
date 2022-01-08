import React from 'react';
import {Provider} from 'react-redux';

import RouterComponent from '../router';
import store from '../../store';

const App = () => (
    <Provider store={store}>
        <RouterComponent />
    </Provider>
);

export default App;
