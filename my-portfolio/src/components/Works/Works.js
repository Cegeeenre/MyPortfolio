import React, {useContext} from "react";
import './Works.css'

import iris from '../../assets/aa.png'
import Header from '../Header/Header'

import { ThemeContext } from "../../Context/ThemeContext";


function Works(){
    const {theme} = useContext(ThemeContext)
    return (
        <div 
        className={ theme ? "works_container goLight" : "works_container goDark" }
        >
            <Header />
            <div className="works">
                <h3 className="work_title">Works</h3>  
                <div className="work">
                    <img src={iris} alt="work"></img>
                    <div className="work_infos">
                        <p className="title">Etyva</p>
                        <p className="description">Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
                <span className="separator"></span>
                <div className="work">
                    <img src={iris} alt="work"></img>
                    <div className="work_infos">
                        <p className="title">Etyva</p>
                        <p className="description">Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
                <span className="separator"></span>
                <div className="work">
                    <img src={iris} alt="work"></img>
                    <div className="work_infos">
                        <p className="title">Etyva</p>
                        <p className="description">Plateforme de covoiturage fait par des étudiants, pour des étudiants</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works