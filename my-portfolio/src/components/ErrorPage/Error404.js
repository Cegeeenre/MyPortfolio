import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

import Home from '../../components/HomePage/Home'
import { ThemeContext } from '../../Context/ThemeContext'

export default function Error404() {
  const {theme} = useContext(ThemeContext)
  return (
    <div 
    className= {theme ? "error404_container goLight" : "error404_container goDark" }
    >
      <div className='error404'>
        <h1>Page not Found</h1>
        <p>Your page has not been found.</p>
      </div>
      <span 
      className={theme ? "separator goLight" : "separator goDark"}
      ></span>
      <Link to={Home}>
          <button className='home_btn'>Return home</button>
      </Link>               
    </div>
  )
}
