import React from "react";

import styles from '../css/Header.module.css'
import boy_img from "../assets/bureau.png"

function Header(){
    return (
        <header>
            <img src={boy_img} alt="ez"></img>
            <p className={styles.head_subtitle}>Hello, i'm a french student in computer science</p>
            <h1>Tom Thierry</h1>
        </header>
    )
}

export default Header;