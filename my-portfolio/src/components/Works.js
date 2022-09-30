import React from "react";
import styles from '../css/Works.module.css'

import iris from '../assets/aa.png'
import Header from './Header'

function Works(){
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.works}>
                <h3 className={styles.work_title}>Works</h3>  
                <div className={styles.work}>
                    <img src={iris} alt="work"></img>
                    <div className={styles.work_infos}>
                        <p className={styles.title}>Etyva</p>
                        <p className={styles.description}>Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
                <span className={styles.separator}></span>
                <div className={styles.work}>
                    <img src={iris} alt="work"></img>
                    <div className={styles.work_infos}>
                        <p className={styles.title}>Etyva</p>
                        <p className={styles.description}>Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
                <span className={styles.separator}></span>
                <div className={styles.work}>
                    <img src={iris} alt="work"></img>
                    <div className={styles.work_infos}>
                        <p className={styles.title}>Etyva</p>
                        <p className={styles.description}>Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works