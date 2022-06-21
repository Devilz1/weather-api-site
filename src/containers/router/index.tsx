import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {HomeConnected} from 'pages/Home';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import {connect} from 'react-redux';

import s from './style.scss';

const RouterComponent = ({titleHeader, titleFooter}: {[key: string]: string}) => (
    <div className={s.container}>
        <Header titleHeader={titleHeader} />
        <div className={s.body}>
            <BrowserRouter>
                <Route path="/">
                    <HomeConnected />
                </Route>
            </BrowserRouter>
        </div>
        <Footer titleFooter={titleFooter} />
    </div>
);

export default connect((store: any) => ({
    titleHeader: store.home.titleHeader,
    titleFooter: store.home.titleFooter,
}))(RouterComponent);
