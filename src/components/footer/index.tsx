import React from 'react';

import s from './style.scss';

export const Footer = ({titleFooter}: {titleFooter: string}) => (
    <div>
        <h2 className={s.title}>{titleFooter || 'Not title'}</h2>
    </div>
);
