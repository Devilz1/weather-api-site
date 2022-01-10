import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import s from './style.scss';
import {setColorAction, setDescriptionAction, setTitleAction} from './actions';

export const Home = ({setTitle, setDescription, description, color, setColor}: any) => (
    <div className={classnames(s.wrapper, s[color])}>
        <h1 className={s.title}>FrontStand My site</h1>
        <button onClick={() => setTitle()}>Click for change title</button>
        <button onClick={() => setDescription()}>
            Click for change <u>description</u>
        </button>
        <div className={s.buttonsColor}>
            <button onClick={() => setColor('red')}>Click for change background on red</button>
            <button onClick={() => setColor('green')}>Click for change background on green</button>
            <button onClick={() => setColor('yellow')}>
                Click for change background on yellow
            </button>
            <button onClick={() => setColor('brown')}>Click for change background on braun</button>
            <button onClick={() => setColor('pink')}>Click for change background on pink</button>
        </div>
        <h3>{description || 'Not description text'}</h3>
    </div>
);

export const HomeConnected = connect(
    (store: any) => ({
        description: store.home.description,
        color: store.home.color,
    }),
    {
        setColor: setColorAction,
        setTitle: setTitleAction,
        setDescription: setDescriptionAction,
    },
)(Home);
