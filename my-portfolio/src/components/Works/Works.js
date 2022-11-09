import React, {useContext} from "react";
import './Works.css'

import iris from '../../assets/aa.png'
import Header from '../Header/Header'

import { ThemeContext } from "../../Context/ThemeContext";

const datas=[
    {
        title: "Etyva",
        description: "Plateforme de covoiturage fait par des étudiants, pour des étudiants",
        image: iris
    },
    {
        title: "Etyva",
        description: "Plateforme de covoiturage fait par des étudiants, pour des étudiants",
        image: iris
    },
]


function Works(){
    const {theme} = useContext(ThemeContext)
    return (
        <div 
        className={ theme ? "works_container goLight" : "works_container goDark" }
        >
            <div className="works">
                <Header />
                <h3 className="work_title">Works</h3> 
                <div className="works_content">
                    {
                        datas.map((data, index) => (
                            <>
                                <div className="work" key={index}>
                                    <img src={data.image} alt="work" className="work_image" />
                                    <div className="work_infos">
                                        <h3 className="title">{data.title}</h3>
                                        <p className="description">{data.description}</p>
                                    </div>
                                </div>
                                <span className="separator"></span>
                            </>
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

export default Works