import React from "react";

import './Header.css'
import boy_img from "../../assets/bureau.png"
import boy from "../../assets/boy.svg"

function Header(){
    return (
        <header>
            <img src={boy} alt="ez"></img>
            <p className='head_subtitle'>Hello, i'm a french student in computer science</p>
            <h1>Tom Thierry</h1>
        </header>
    )
}

export default Header;