import React from "react";
import styles from '../css/Home.module.css'
import {Link} from "react-router-dom";

import Header from "./Header";

import Cv from "../files/cv.pdf";

function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.home}>
            <Header />
                <section className={styles.works_section}>
                    <h3>Works</h3>
                    <p>Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. 
                    He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. 
                    When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. 
                    He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 300k subscribers.</p>
                </section>
                <section>
                    <h3>Bio</h3>
                    <div className={styles.bio_section}>
                        <div className={styles.info}>
                            <span className={styles.bio_year}>
                            2021
                            </span>
                            <p>Diplomate License</p>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.bio_year}>
                            2021
                            </span>
                            <p>Completed the Master's Program in the Graduate School of Information Science at Nara Institute </p>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.bio_year}>
                            2021
                            </span>
                            <p>Diplomate License</p>
                        </div>
                    </div>
                </section>
                <section className={styles.loves_info}>
                    <h3>I ♥</h3>
                    <p>Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning</p>
                </section>
                <Link to={Cv} target="_blank" download>
                    <button className={styles.contact_btn}>Télécharger mon cv</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Home