import React from "react";
import elf from 'img/elf.jpg';

import s from './style.scss';

const App = () => (
    <div>
        <h1>SITE SITE WWWWW</h1>
        <main>
            <div className={s.zvaal}>1</div>
            <div className={s.wow}>2</div>
            <div className={s.elf}><img src={elf} alt="Elf"/></div>
        </main>
    </div>
);

export default App;

