import React from 'react'
import {Introduction} from './Intro'
import '../styles/Body.css'
import {About} from './About'
export const BodyElement = () => {

 return(
  <div className = "main">
    <Introduction />
     <About image = "./assests/Sumya.jpeg" />
  </div>

 );


}
