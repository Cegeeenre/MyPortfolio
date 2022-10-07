import React, {useContext} from "react"
import {Link} from "react-router-dom";
import './Nav.css';

import {ThemeContext} from '../../Context/ThemeContext'
import BtnToggle from "../btnToggle/BtnToggle";
import romarin from '../../assets/romarin.png';

function Nav(){
    const {toggleTheme, theme} = useContext(ThemeContext);
    return (
        <div 
        className={theme ? 'nav_container goLight' : 'nav_container goDark'}
        >
            <div className='navbar'>
                    <div className='nav_logo'>
                        <img src={romarin} alt="romarin flowers"></img>
                        <Link to="/">
                            <h3>Tom Thierry</h3>
                        </Link>
                    </div>
                <div className='nav_links'>
                    <Link to="/works">Works</Link>
                </div>
                <BtnToggle/>
            </div>
        </div>
    )
}

export default Nav