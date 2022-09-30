import React from "react"
import {Link} from "react-router-dom";
import styles from '../css/Nav.module.css'

import iris from '../assets/romarin.png'

function Nav(){
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                    <div className={styles.nav_logo}>
                        <img src={iris} alt="iris flowers"></img>
                        <Link to="/">
                            <h3>Tom Thierry</h3>
                        </Link>
                    </div>
                <div className={styles.nav_links}>
                    <Link to="/works">Works</Link>
                </div>
                <div className={styles.nav_nightBtn}>
                    <button className={styles.night_tolight}>Night</button>
                </div>
            </div>
        </div>
    )
}

export default Nav