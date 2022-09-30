import React from "react"
import styles from '../css/Footer.module.css'


function Footer(){
    return (
        <footer className={styles.container}>
            <p className={styles.copyrights}>© 2022 Tom Thierry. Made in React.</p>
        </footer>
    )
}

export default Footer