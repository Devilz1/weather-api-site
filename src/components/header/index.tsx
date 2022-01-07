import React from 'react';

import s from './style.scss';

export const Header = ({titleHeader}: {titleHeader: string}) => (
    <div>
        <h2 className={s.title}>{titleHeader || 'Not title'}</h2>
    </div>
);
