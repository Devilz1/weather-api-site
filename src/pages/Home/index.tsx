import React from 'react';
import {connect} from 'react-redux';

import s from './style.scss';
import {setTitleAction} from './actions';

export const Home = ({setTitle}: any) => (
    <div className={s.wrapper}>
        <h1 className={s.title}>FrontStan My site</h1>
        <button onClick={() => setTitle()}>Click for change title</button>
    </div>
);

export const HomeConnected = connect(null, {setTitle: setTitleAction})(Home);
