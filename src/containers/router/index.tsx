import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {HomeConnected} from 'pages/Home';

const RouterComponent = () => (
    <BrowserRouter>
        <Route path="/">
            <HomeConnected />
        </Route>
    </BrowserRouter>
);

export default RouterComponent;
