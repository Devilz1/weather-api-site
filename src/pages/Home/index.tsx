import React from 'react';
import {connect} from 'react-redux';

import s from './style.scss';
import {setDescriptionAction, setTitleAction} from './actions';

export const Home = ({setTitle, setDescription, description}: any) => (
    <div className={s.wrapper}>
        <h1 className={s.title}>FrontStand My site</h1>
        <button onClick={() => setTitle()}>Click for change title</button>
        <button onClick={() => setDescription()}>
            Click for change <u>description</u>
        </button>
        <h3>{description || 'Not description text'}</h3>
    </div>
);

export const HomeConnected = connect(
    (store: any) => ({
        description: store.home.description,
    }),
    {
        setTitle: setTitleAction,
        setDescription: setDescriptionAction,
    },
)(Home);
