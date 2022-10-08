import React, {useContext} from 'react'
import './BtnToggle.css'

import {ThemeContext} from '../../Context/ThemeContext'

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <div 
        className={theme ? 'btn-toggle goLight' : 'btn-toggle goDark'}
        onClick={toggleTheme}
        >
            {theme ? '🌙' : '☀️'}
        </div>
    )
}
