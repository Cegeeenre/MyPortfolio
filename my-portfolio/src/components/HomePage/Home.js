import React, { useContext } from "react";
import './Home.css'
import {Link} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {ThemeContext} from '../../Context/ThemeContext'

import Cv from "../../files/cv.pdf";

function Home(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div 
        className={ theme ? 'home_container goLight' : 'home_container goDark'}
        >
            <div className='home'>
            <Header />
                <section className='works_section'>
                    <h3>Works</h3>
                    <p>Hello, je suis Tom, un jeune developpeur francais. Pris de passion pour le web, je suis un developpeur Front-end. 
                        Quand je ne suis pas sur mon ordinateur, je suis sur mon skate, ou en train de faire de l'escalade, ou peut etre même
                        en train de traverser la vallée de la chartreuse. 
                    </p>
                </section>
                <section>
                    <h3>Bio</h3>
                    <div className='bio_section'>
                        <div className='info'>
                            <span className='bio_year'>
                            2022
                            </span>
                            <p>Master 1 - Bourget du Lac - Université Savoie Mont Blanc</p>
                        </div>
                        <div className='info'>
                            <span className='bio_year'>
                            2021
                            </span>
                            <p>Licence Informatique - Bourget du Lac - Université Savoie Mont Blanc</p>
                        </div>
                        <div className='info'>
                            <span className='bio_year'>
                            2019
                            </span>
                            <p>Bac Scientifique - Chambéry - Lycée Vaugelas</p>
                        </div>
                    </div>
                </section>
                <section className='loves_info'>
                    <h3>I ♥</h3>
                    <p>Musique, Skateboard, Escalade, Randonnée</p>
                </section>
                <Link to={Cv} target="_blank" download>
                    <button className='contact_btn'>Télécharger mon cv</button>
                </Link>
            </div>
            <Footer />
        </div>
        
    )
}

export default Home